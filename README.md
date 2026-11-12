# Mộc An Boutique Hotel

Frontend starter for a Vietnamese boutique-hotel website, built with Next.js App Router, TypeScript, and CSS.

## Run locally

Install Node.js (LTS), then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Before deployment, run `npm run lint`, `npm run typecheck`, and `npm run build`.

## Deploy to GitHub Pages

The `main` branch is deployed automatically to GitHub Pages by `.github/workflows/deploy.yml`.
For the first deployment, open the repository's **Settings → Pages** and set the source to **GitHub Actions**.
The site URL will be `https://giahuy1675.github.io/web_khach_san_ht/`.

## Project structure

- `src/app/` — app layout, page composition, global responsive styles
- `src/components/` — reusable site header, booking form, room card, icons, and section heading
- `src/data/hotel.ts` — sample hotel, room, experience, and gallery content
- `public/images/` — add the hotel's own photos here

The image folder is intentionally empty until the hotel photos are provided. Add the image files under `public/images/`; then update their `/images/...` paths in `src/data/hotel.ts` and `src/app/page.tsx`. The layout displays gentle placeholders until images are connected. The booking form is currently a frontend-only demo and does not submit or reserve a room.

The gallery uses CSS horizontal scroll snap. The layout is mobile-first and includes a responsive navigation menu. Booking availability, guest management, and payment should be connected to a backend when those features are ready.
