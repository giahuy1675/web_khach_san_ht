import { assetPath } from "@/shared/lib/assets";

export const galleryContent = {
  label: "Thư viện ảnh khách sạn",
  viewLibraryLabel: "Xem thư viện",
  viewLibraryHref: "#thu-vien-anh",
  previousLabel: "Ảnh trước",
  nextLabel: "Ảnh tiếp theo",
  images: [
    { src: assetPath("/images/mega-menu/stay.jpg"), alt: "Hồ bơi và khu nghỉ dưỡng River Hotel" },
    { src: assetPath("/images/mega-menu/dining.jpg"), alt: "Không gian nhà hàng" },
    { src: assetPath("/images/mega-menu/ha-tien.jpg"), alt: "Cảnh quan Hà Tiên" },
    { src: assetPath("/images/mega-menu/explore.jpg"), alt: "Hoạt động quanh khách sạn" },
    { src: assetPath("/images/mega-menu/stay.jpg"), alt: "Phòng nghỉ River Hotel" },
  ],
} as const;
