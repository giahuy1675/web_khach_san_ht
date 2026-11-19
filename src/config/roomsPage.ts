import { assetPath } from "@/shared/lib/assets";

export const roomsPageContent = {
  metaTitle: "Phòng – River Hotel Hà Tiên",
  title: "Phòng và trải nghiệm",
  metaDescription: "Các loại phòng tại River Hotel Hà Tiên.",
  href: "/phong",
  breadcrumbLabel: "Đường dẫn trang",
  detail: {
    bookLabel: "Đặt ngay",
    bookHref: "/#lien-he",
    amenitiesTitle: "Phòng này có những dịch vụ gì?",
    amenityGroups: [
      {
        id: "space",
        icon: "door",
        label: "Không gian phòng",
        items: ["Ban công", "Phòng khách riêng biệt"],
        defaultOpen: true,
      },
      {
        id: "bedroom",
        icon: "bed",
        label: "Phòng ngủ",
        items: ["Màn che", "Điều hòa không khí", "Quạt", "Wi-Fi miễn phí", "Két an toàn"],
        defaultOpen: false,
      },
      {
        id: "bathroom",
        icon: "shower",
        label: "Phòng tắm",
        items: [
          "Dầu gội đầu",
          "Bàn chải đánh răng",
          "Máy sấy tóc",
          "Áo choàng tắm và dép",
          "Đồ vệ sinh cá nhân chất lượng cao",
        ],
        defaultOpen: false,
      },
      {
        id: "media",
        icon: "tv",
        label: "TV và thiết bị âm thanh",
        items: ["TV màn hình phẳng", "Điện thoại", "Loa Bluetooth"],
        defaultOpen: false,
      },
      {
        id: "food",
        icon: "food",
        label: "Thực phẩm và đồ uống",
        items: ["Ấm đun nước điện", "Nước khoáng miễn phí", "Minibar"],
        defaultOpen: false,
      },
      {
        id: "other",
        icon: "info",
        label: "Dịch vụ khác bao gồm",
        items: ["Dọn phòng hằng ngày", "Dịch vụ giặt ủi", "Hỗ trợ lễ tân 24 giờ"],
        defaultOpen: false,
      },
    ],
  },
  breadcrumb: [
    { label: "River", href: "/" },
    { label: "Khách sạn", href: "/" },
    { label: "Việt Nam", href: "/" },
    { label: "Hà Tiên", href: "/" },
    { label: "River Hotel Hà Tiên", href: "/" },
    { label: "Phòng", href: null },
  ],
  gallery: {
    label: "Hình ảnh phòng",
    previousLabel: "Ảnh trước",
    nextLabel: "Ảnh tiếp theo",
    images: [
      { src: assetPath("/images/mega-menu/stay.jpg"), alt: "Phòng nghỉ River Hotel" },
      { src: assetPath("/images/mega-menu/ha-tien.jpg"), alt: "Không gian ngoài trời" },
      { src: assetPath("/images/mega-menu/dining.jpg"), alt: "Khu vực ăn uống" },
      { src: assetPath("/images/mega-menu/explore.jpg"), alt: "Cảnh quan Hà Tiên" },
      { src: assetPath("/images/mega-menu/stay.jpg"), alt: "Phòng nghỉ River Hotel" },
    ],
  },
} as const;
