// app/api/contact/route.ts
import { NextResponse } from "next/server";
export const runtime = "nodejs";
import { Resend } from "resend";

function env(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const resend = new Resend(env("RESEND_API_KEY"));
    const to = process.env.TO_EMAIL || "info@nubbletechnology.com";

    const { error, data } = await resend.emails.send({
      // After you verify your domain in Resend, use your domain here (e.g., info@nubbletechnology.com)
      // Until then, you can temporarily use: "Nubble Technology <onboarding@resend.dev>"
      from: "Nubble Technology <onboarding@resend.dev>",
      to,
      reply_to: email,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("CONTACT_ERROR", { message: error.message });
      return NextResponse.json({ ok: false, error: "Email send failed" }, { status: 500 });
    }

    console.log("CONTACT_SENT", { id: data?.id, to });
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("CONTACT_ERROR", { message: err?.message });
    return NextResponse.json({ ok: false, error: "Email send failed" }, { status: 500 });
  }
}
