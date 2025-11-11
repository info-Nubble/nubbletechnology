import { NextResponse } from "next/server";
export const runtime = "nodejs"; // ensure not Edge

// If you prefer Resend/SendGrid later, we can swap this block.
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,             // e.g. smtp.gmail.com
      port: Number(process.env.SMTP_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,           // info@nubbletechnology.com
        pass: process.env.SMTP_PASS,           // app password
      },
    });

    await transporter.sendMail({
      from: `"Nubble Website" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
