# Auvrenn

Independent fragrance house site for **Terra**. You do **not** need Vercel. Emails go out through a Cloudflare Worker (the same host as auvrenn.com) using Resend.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://127.0.0.1:43145](http://127.0.0.1:43145).

## Email (Resend + Cloudflare)

Waitlist and contact posts go to `/api/release-list` and `/api/contact`. Locally, Next.js handles those. On auvrenn.com, the Cloudflare Worker in `worker.ts` sends them with Resend.

`auvrenn.com` is already verified in Resend. Set:

```
RESEND_FROM="Auvrenn <hello@auvrenn.com>"
RESEND_TO=your-inbox@email.com
RESEND_API_KEY=re_xxxxxxxxx
```

Never commit `RESEND_API_KEY`.

Deploy (from this folder, logged into Cloudflare):

```bash
npx wrangler login
npx wrangler secret put RESEND_API_KEY
npm run deploy
```

`RESEND_TO` and `RESEND_FROM` are in `wrangler.json`. Change them there if you want a different inbox.

## Pages

- `/` — debut home
- `/fragrance` — Terra composition
- `/story` — the house
- `/shop` — 75 ml waitlist
- `/faq` — release questions
- `/contact` — studio correspondence

## Stack

Next.js (static export), Cloudflare Worker, Resend, TypeScript, Tailwind CSS, shadcn/ui.
