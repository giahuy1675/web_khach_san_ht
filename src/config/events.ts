import { assetPath } from "@/shared/lib/assets";

export const eventsContent = {
  title: "Sự kiện",
  stats: [
    { value: "2", label: "Phòng tổ chức sự kiện" },
    { value: "120", label: "Sức chứa" },
    { value: "180", label: "m²" },
  ],
  description:
    "Được thiết kế để đáp ứng mọi nhu cầu của khách hàng, với trang thiết bị hiện đại như máy chiếu, micrô không dây, Wi-Fi tốc độ cao, v.v.",
  moreLabel: "Tìm hiểu thêm",
  moreHref: "#lien-he",
  quoteLabel: "Yêu cầu báo giá",
  quoteHref: "#lien-he",
  galleryLabel: "Xem thư viện",
  galleryHref: "#su-kien",
  image: assetPath("/images/mega-menu/explore.jpg"),
  imageAlt: "Phòng tổ chức sự kiện",
} as const;
