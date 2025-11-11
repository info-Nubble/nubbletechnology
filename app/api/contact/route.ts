// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

// memory rate-limit bucket
const RATE: Record<string, { count: number; ts: number }> = {};
const WINDOW_MS = 60 * 1000;
const MAX_PER_WINDOW = 3;

type Payload = {
  name: string;
  email: string;
  phone?: string;
  type?: string;
  details?: string;
  company?: string; // honeypot
};

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
    const now = Date.now();
    const bucket = RATE[ip] ?? { count: 0, ts: now };
    if (now - bucket.ts > WINDOW_MS) {
      bucket.count = 0;
      bucket.ts = now;
    }
    bucket.count++;
    RATE[ip] = bucket;
    if (bucket.count > MAX_PER_WINDOW) {
      return NextResponse.json({ ok: false, error: "Rate limit" }, { status: 429 });
    }

    const body = (await req.json()) as Payload;

    if (!body?.name || !body?.email) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // Honeypot
    if (body.company && body.company.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const subject = `New Site Survey Request — ${body.type || "General"}`;
    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111">
        <h2 style="margin:0 0 8px">New Contact from NubbleTechnology.com</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ""}
        ${body.type ? `<p><strong>Property type:</strong> ${body.type}</p>` : ""}
        ${body.details ? `<p><strong>Details:</strong><br/>${body.details.replace(/\n/g, "<br/>")}</p>` : ""}
        <hr/>
        <p style="color:#666">This message was sent from the website contact form.</p>
      </div>
    `;

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set; skipping email send.");
      return NextResponse.json({ ok: true });
    }

    await resend.emails.send({
  from,
  to,
  subject,
  html,
  replyTo: body.email,    // ✅ correct key
});


    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
