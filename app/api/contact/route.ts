// app/api/contact/route.ts
export const runtime = "nodejs";           // force Node (NOT Edge)
export const dynamic = "force-dynamic";    // ensure it's a serverless function

import { NextResponse } from "next/server";
// import nodemailer from "nodemailer"; // <-- keep commented for the dry-run

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    // ✅ DRY-RUN: prove the function is alive and parsing JSON
    return NextResponse.json({ ok: true, dryRun: true, echo: payload }, { status: 200 });

  } catch (err) {
    console.error("Contact dry-run error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
