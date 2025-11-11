"use client";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thanks! This demo form is not wired yet.");
  };

  return (
    <form className="card space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm text-neutral-400">Name</label>
        <input required className="mt-1 w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your name" />
      </div>
      <div>
        <label className="block text-sm text-neutral-400">Email</label>
        <input required type="email" className="mt-1 w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="you@company.com" />
      </div>
      <div>
        <label className="block text-sm text-neutral-400">What do you need?</label>
        <textarea rows={4} className="mt-1 w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Website revamp, iOS app, Wi‑Fi fix, etc." />
      </div>
      <button type="submit" className="w-full btn btn-primary">Send message</button>
      <p className="text-xs text-neutral-500">No spam. No hard sells. Just honest guidance.</p>
    </form>
  );
}
