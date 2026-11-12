# River Hotel Hà Tiên

Website giới thiệu River Hotel tại Hà Tiên, xây dựng bằng Next.js App Router, TypeScript và CSS.

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
- `src/data/hotel.ts` — thông tin khách sạn, phòng nghỉ, trải nghiệm và thư viện ảnh
- `public/images/` — logo và hình ảnh khách sạn

Thay ảnh trong `public/images/` bằng hình ảnh chính thức của khách sạn khi cần; cập nhật đường dẫn ảnh trong `src/data/hotel.ts` và `src/app/page.tsx`. Một số khu vực vẫn dùng ảnh chờ cập nhật. Form đặt phòng hiện chỉ là giao diện minh họa, chưa gửi yêu cầu đặt phòng.

The gallery uses CSS horizontal scroll snap. The layout is mobile-first and includes a responsive navigation menu. Booking availability, guest management, and payment should be connected to a backend when those features are ready.
