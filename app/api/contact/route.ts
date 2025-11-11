import { NextResponse } from "next/server";
import { Resend } from "resend";

type FormPayload = {
  name?: string;
  email?: string;
  message?: string;
  subject?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as FormPayload;

    const name = body.name?.trim() || "Unknown";
    const email = body.email?.trim() || "";
    const subject = body.subject?.trim() || `New contact from ${name}`;
    const message = (body.message || "").trim();

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial">
        <h2>New website contact</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <pre style="white-space:pre-wrap">${message}</pre>
      </div>
    `;

    // define these explicitly
    const from = "Nubble Website <noreply@nubbletechnology.com>";
    const to = ["info@nubbletechnology.com"];

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Deploys will still build; the endpoint returns 503 until key is set
      return NextResponse.json(
        { ok: false, error: "Email service not configured" },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      subject,
      html,
      replyTo: email || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}
