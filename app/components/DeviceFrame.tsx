'use client';
import { useState } from 'react';

export default function DeviceFrame() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative rounded-[1.75rem] border border-neutral-800 bg-neutral-900/40 p-1 shadow-2xl">
      <div className="absolute -inset-0.5 rounded-[1.75rem] bg-gradient-to-br from-emerald-500/10 to-cyan-400/10 blur-2xl" />
      <div className="relative rounded-[1.5rem] bg-neutral-950 p-6">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
          {imgError ? (
            <div
              aria-label="UI preview"
              className="h-full w-full"
              style={{
                background:
                  'radial-gradient(600px 300px at 30% 10%, rgba(16,185,129,.35), transparent), radial-gradient(500px 260px at 70% 0%, rgba(34,211,238,.25), transparent)'
              }}
            />
          ) : (
            // Using plain <img> to avoid bundling next/image for a placeholder asset.
            <img
              src="/hero-ui.png"
              alt="Nubble Technology work preview"
              className="h-full w-full object-cover"
              onError={() => setImgError(true)}
            />
          )}
        </div>
        <p className="small mt-4 text-neutral-400">Secure by default · ADA-minded UI · CI/CD ready</p>
      </div>
    </div>
  );
}
