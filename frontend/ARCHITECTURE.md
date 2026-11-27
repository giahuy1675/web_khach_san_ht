# Kiến trúc frontend

## Bối cảnh và lựa chọn

- Dự án: website giới thiệu River Hotel Hà Tiên, quy mô nhỏ.
- Stack: Next.js 16 App Router, TypeScript strict, Tailwind CSS 4.
- Deploy: static export lên GitHub Pages; chưa có backend/API, auth hoặc đa ngôn ngữ.
- Nội dung phòng hiện đặt trong feature; không tạo dữ liệu phòng giả khi chưa được xác nhận.
- Tổ chức theo feature để phần giao diện, hook, service và kiểu dữ liệu nằm cùng domain.

## Cấu trúc

```text
.env.example                     # Mẫu env; API URL để trống khi chưa có backend
.github/
└── copilot-instructions.md      # Nhắc Copilot đọc tài liệu này trước khi sửa code
eslint.config.mjs
eslint-rules/
└── no-cross-feature-import.mjs  # Chặn import trực tiếp giữa các feature
next.config.ts                   # Static export/GitHub Pages
package.json
postcss.config.mjs               # Tailwind CSS 4
public/images/mega-menu/         # Ảnh local cho các thẻ trong mega menu
src/
├── app/
│   ├── globals.css              # Tailwind và reset toàn cục
│   ├── layout.tsx               # Metadata và layout gốc
│   └── page.tsx                 # Ghép các feature cho trang chủ
├── config/
│   ├── bookingSearch.ts        # Nhãn và giá trị mặc định của thanh tìm kiếm
│   ├── home.ts                  # Nội dung trang chủ
│   └── site.ts                  # Thương hiệu, SEO, menu, liên hệ
├── features/
│   ├── booking-search/
│   │   ├── components/
│   │   │   ├── BookingCalendar.tsx
│   │   │   ├── BookingPopover.tsx
│   │   │   ├── BookingPopover.module.css
│   │   │   ├── BookingSearchBar.tsx
│   │   │   ├── BookingSearchBar.module.css
│   │   │   ├── BookingSearchFields.tsx
│   │   │   ├── DiscountSelector.tsx
│   │   │   └── GuestSelector.tsx
│   │   ├── hooks/useAnimatedBookingPin.ts
│   │   ├── types.ts
│   │   └── index.ts
│   ├── home/
│   │   ├── components/HomeIntro.tsx
│   │   └── index.ts
│   └── rooms/
│       ├── components/RoomList.tsx
│       ├── data/rooms.ts
│       ├── hooks/useRooms.ts
│       ├── services/roomsService.ts
│       ├── types.ts
│       └── index.ts
├── shared/
│   ├── components/layout/
│   │   ├── SiteFooter.tsx
│   │   ├── SiteHeader.tsx
│   │   ├── SiteHeader.module.css
│   │   ├── MainMenu.tsx
│   │   ├── MegaMenu.tsx
│   │   ├── MegaMenu.module.css
│   │   └── SiteLayout.tsx
│   ├── lib/apiClient.ts
│   └── types/api.ts
└── styles/tokens.css            # Design tokens

ARCHITECTURE.md                  # Quy tắc kiến trúc và checklist feature
tsconfig.json
```

## Quy tắc

- `app/` chỉ khai báo route, metadata và ghép public API của feature.
- Mỗi feature tự quản lý `components/`, `hooks/`, `services/`, `types.ts`, `index.ts`; thêm `data/` khi có nội dung tĩnh riêng.
- Không import trực tiếp giữa hai feature. Phần dùng chung thực sự (từ hai feature trở lên) mới đưa vào `shared/`.
- UI không gọi API; hook điều phối trạng thái, service lấy dữ liệu và ánh xạ DTO sang model.
- Mọi request REST phải đi qua `shared/lib/apiClient.ts`; cấu hình base URL bằng `NEXT_PUBLIC_API_BASE_URL`.
- Hiện dự án export tĩnh và chưa có API, nên feature phòng đọc dữ liệu nội bộ; khi có backend, chuyển service sang apiClient.
- Nội dung, SEO, menu và liên hệ đặt trong `config/` hoặc `data/`, không hardcode trong JSX.
- Màu, font và spacing dùng token trong `styles/tokens.css`; component mới ưu tiên utility Tailwind.
- TypeScript bật `strict`; không dùng `any`. Component nên nhỏ hơn khoảng 150 dòng và chỉ có một trách nhiệm.

## Thêm feature mới

1. Tạo `src/features/<feature-name>/` cùng `components/`, `hooks/`, `services/`, `types.ts` và `index.ts`.
2. Thêm model/DTO riêng vào `types.ts`; thêm dữ liệu tĩnh riêng vào `data/` nếu cần.
3. Viết service để đọc dữ liệu hoặc gọi `apiClient`, đồng thời ánh xạ DTO sang model.
4. Đặt điều phối trạng thái trong hook; không gọi API từ component UI.
5. Tạo component hiển thị loading, lỗi và empty state; lấy nội dung thay đổi từ config/data.
6. Export đúng phần công khai qua `index.ts`, rồi ghép feature trong route.
7. Chạy `npm run lint`, `npm run typecheck` và `npm run build`.

## Quy ước đặt tên

- Component/type: `PascalCase`; hook: `useXxx`; hàm, service và biến: `camelCase`.
- Tên feature/folder: `kebab-case`; public entry của feature: `index.ts`.
- Dùng CSS variables/design tokens cho thiết kế dùng chung; tránh file `utils` gom nhiều trách nhiệm.
