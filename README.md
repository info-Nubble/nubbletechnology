# Nubble Technology – Multi‑Page Site (Next.js App Router + Tailwind)

Pages included:
- `/` Home
- `/about`
- `/services` (sections: #web, #apps, #wifi with packages)
- `/pricing`
- `/contact`
- `/privacy`, `/terms` (placeholders)

## Quick Start
1. Install dependencies
   ```bash
   npm install
   ```
2. Run locally
   ```bash
   npm run dev
   ```
3. Build & start
   ```bash
   npm run build && npm start
   ```

### Tailwind
Configured in `tailwind.config.ts` and `app/globals.css`.

### Customize
- Update contact info in `app/contact/page.tsx` and header links in `app/layout.tsx`.
- Adjust pricing/packages in `app/services/page.tsx` and `app/pricing/page.tsx`.
- Replace the gradient square in the header with your logo at `public/logo.png` and update `layout.tsx`.

### Form handling
The contact form is client-side only. I can wire it to:
- Email (Resend/SMTP)
- Supabase database + email notifications
- CRM (HubSpot/Pipedrive/Zapier)

### Deploy
- **Vercel** (recommended): import from Git repo, set framework to Next.js.
- **Netlify**: Next adapter.
- **Custom server**: `npm run build` then `npm start`.

---
© Nubble Technology. Veteran‑Owned Small Business.
