# Hướng dẫn cho các thay đổi trong repo

Trước khi thêm tính năng hoặc sửa cấu trúc, đọc `ARCHITECTURE.md` và kiểm tra code hiện có.
Giữ route mỏng; đặt UI, hook, service, types và data trong feature tương ứng.
Không import chéo giữa các feature; tái sử dụng qua `shared/` chỉ khi có ít nhất hai nơi dùng.
Đưa nội dung thay đổi được vào `config/` hoặc `data/`, và mọi request REST qua `shared/lib/apiClient.ts`.
Giữ tương thích static export/GitHub Pages cho đến khi yêu cầu deploy thay đổi.
