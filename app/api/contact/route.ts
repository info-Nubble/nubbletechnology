// app/api/contact/route.ts
import { NextResponse } from "next/server";
export const runtime = "nodejs";
import nodemailer from "nodemailer";

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

    const host = env("SMTP_HOST");                  // smtp.gmail.com
    const portNum = Number(env("SMTP_PORT"));       // 465 or 587
    const user = env("SMTP_USER");                  // info@nubbletechnology.com
    const pass = env("SMTP_PASS");                  // 16-char App Password
    const to = process.env.TO_EMAIL || user;

    const transporter = nodemailer.createTransport({
      host,
      port: portNum,
      secure: portNum === 465,                      // true for 465, false for 587
      auth: { user, pass },
      tls: { ciphers: "TLSv1.2" },                  // be explicit
      logger: true                                  // extra logs in Vercel
    });

    // Verify auth/connection — shows clear error in logs if wrong
    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"Nubble Website" <${user}>`,
      to,
      replyTo: email,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    console.log("CONTACT_SENT", { messageId: info.messageId, to });
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("CONTACT_ERROR", { message: err?.message });
    return NextResponse.json({ ok: false, error: "Email send failed" }, { status: 500 });
  }
}
