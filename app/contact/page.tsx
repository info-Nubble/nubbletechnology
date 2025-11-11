"use client";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setOk(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      setOk(res.ok);
      if (res.ok) {
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch {
      setOk(false);
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="container py-20">
      <h1 className="h2">Contact</h1>
      <p className="mt-3 text-neutral-300">
        Send a quick note about your project and the best way to reach you.
      </p>

      <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-xl">
        <input
          className="card"
          name="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="card"
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          className="card"
          name="message"
          placeholder="Project details"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button className="btn btn-primary w-fit" type="submit" disabled={sending}>
          {sending ? "Sending…" : "Send"}
        </button>
        {ok === true && (
          <p className="text-emerald-400 text-sm">Thanks—your message was sent.</p>
        )}
        {ok === false && (
          <p className="text-red-400 text-sm">Sorry, something went wrong.</p>
        )}
      </form>

      <p className="small mt-4 text-neutral-400">
        Prefer email? <a href="mailto:info@nubbletechnology.com">info@nubbletechnology.com</a> · 207-337-9728
      </p>
    </section>
  );
}
