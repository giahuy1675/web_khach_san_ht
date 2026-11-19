import { assetPath } from "@/shared/lib/assets";

export const homeContent = {
  intro: {
    eyebrow: "HÀ TIÊN, VIỆT NAM",
    title: "River Hotel\nHà Tiên",
    image: assetPath("/images/mega-menu/stay.jpg"),
    featured: {
      title: "Phòng cao cấp",
      description: "Kỳ nghỉ thoải mái nhất bên dòng sông Hà Tiên với tầm nhìn ra sông.",
      image: assetPath("/images/mega-menu/stay.jpg"),
      href: "#luu-tru",
      linkLabel: "Xem Phòng cao cấp",
    },
  },
  rooms: {
    title: "Nơi lưu trú",
    viewAllLabel: "Xem tất cả các phòng",
    loadingMessage: "Đang tải thông tin phòng...",
    emptyMessage: "Thông tin phòng sẽ được cập nhật sớm.",
    errorMessage: "Không thể tải thông tin phòng.",
    ctaLabel: "Xem phòng trống",
    gallery: [
      assetPath("/images/mega-menu/stay.jpg"),
      assetPath("/images/mega-menu/ha-tien.jpg"),
      assetPath("/images/mega-menu/dining.jpg"),
      assetPath("/images/mega-menu/explore.jpg"),
    ],
  },
} as const;
