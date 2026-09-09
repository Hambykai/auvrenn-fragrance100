# Auvrenn

Independent fragrance house site for **Terra**, the debut 75 ml release. Mobile-first so the house, fragrance, shop waitlist, FAQ, and contact pages actually render and scroll on phones.

The previous Manus/Vite build clipped overflow, collapsed hero images on iOS, and shipped a large desktop editor script. Phones often showed a blank or frozen screen. This rebuild keeps the same copy and photography.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43145](http://127.0.0.1:43145).

## Pages

- `/` — debut home
- `/fragrance` — Terra composition
- `/story` — the house
- `/shop` — 75 ml waitlist
- `/faq` — release questions
- `/contact` — studio correspondence

The release list and contact form confirm locally. They do not send email unless you add a backend later.

## Deploy

```bash
npm run build
```

That writes a static site to `out/`. Cloudflare can serve `out/` (see `wrangler.json`). You can also publish with Vercel.

## Stack

Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
