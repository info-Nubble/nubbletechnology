"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"error">("idle");
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMsg("");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json?.error || "Send failed");
      setStatus("ok");
      setMsg("Thanks — we received your request and will reply shortly.");
      e.currentTarget.reset();
    } catch (err: any) {
      setStatus("error");
      setMsg(err?.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <main className="container py-16 md:py-20">
      <h1 className="h2 text-glow">Request a Site Survey</h1>
      <p className="mt-3 text-white/80 max-w-2xl">
        Tell us about your building and busy times. We’ll reply the same day with options.
      </p>

      <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:max-w-xl">
        <input className="w-full rounded-xl border border-white/10 bg-white/5 p-3"
               placeholder="Your name" name="name" required />
        <input className="w-full rounded-xl border border-white/10 bg-white/5 p-3"
               placeholder="Email" name="email" type="email" required />
        <input className="w-full rounded-xl border border-white/10 bg-white/5 p-3"
               placeholder="Phone (optional)" name="phone" />
        <select className="w-full rounded-xl border border-white/10 bg-white/5 p-3" name="type" defaultValue="">
          <option value="" disabled>Property type</option>
          <option>Hotel / Inn</option>
          <option>Café / Coffee Shop</option>
          <option>Office / Clinic</option>
          <option>Bar / Venue</option>
          <option>Other</option>
        </select>
        <textarea className="w-full rounded-xl border border-white/10 bg-white/5 p-3"
                  placeholder="Tell us what’s happening (dead zones, drops, POS issues…)" name="details" rows={5} />

        {/* Honeypot (hidden) */}
        <input className="hidden" type="text" name="company" autoComplete="off" tabIndex={-1} />

        <button className="btn btn-primary" type="submit" disabled={status==="sending"}>
          {status==="sending" ? "Sending…" : "Send"}
        </button>

        {status !== "idle" && (
          <p className={`text-sm ${status==="ok" ? "text-emerald-300" : status==="error" ? "text-red-400" : "text-white/70"}`}>
            {msg}
          </p>
        )}
      </form>

      <div className="mt-8 text-sm text-white/70">
        Or reach us directly: <a className="underline" href="mailto:info@nubbletechnology.com">info@nubbletechnology.com</a> · <a className="underline" href="tel:12073379728">207-337-9728</a>
      </div>
    </main>
  );
}
