const sectionIds = {
  rooms: "luu-tru",
} as const;

export const siteConfig = {
  name: "River Hotel Hà Tiên",
  brandMark: "RIVER",
  brandCaption: "HOTEL · HÀ TIÊN",
  description: "Website giới thiệu River Hotel Hà Tiên.",
  menuLabel: "Mở menu",
  closeMenuLabel: "Đóng menu",
  megaMenuLabel: "Menu chính River Hotel",
  quickNavigationLabel: "Điều hướng nhanh",
  primaryNavigationLabel: "Điều hướng chính",
  sections: sectionIds,
  navigation: [
    { label: "Nơi lưu trú", href: `#${sectionIds.rooms}` },
    { label: "Ẩm thực", href: "#am-thuc" },
    { label: "Thư viện ảnh", href: "#thu-vien-anh" },
    { label: "Dịch vụ", href: "#dich-vu" },
    { label: "Các hoạt động", href: "#hoat-dong" },
  ],
  megaMenu: {
    tabs: [
      { label: "Khách sạn", href: "#luu-tru", active: true },
      { label: "Ẩm thực", href: "#am-thuc", active: false },
      { label: "Trải nghiệm", href: "#hoat-dong", active: false },
      { label: "Ưu đãi", href: "#uu-dai", active: false },
    ],
    sidebar: {
      eyebrow: "KHÁCH SẠN",
      description: "Trải nghiệm kỳ nghỉ đáng nhớ tại Hà Tiên.",
      heading: "Khám phá River Hotel",
      links: [
        { label: "Nơi lưu trú", href: "#luu-tru" },
        { label: "Ẩm thực", href: "#am-thuc" },
        { label: "Dịch vụ", href: "#dich-vu" },
      ],
      contactLabel: "Liên hệ khách sạn",
      contactHref: "#lien-he",
    },
    cards: [
      {
        label: "Hà Tiên",
        href: "#hoat-dong",
        image: "/images/mega-menu/ha-tien.jpg",
      },
      {
        label: "Nơi lưu trú",
        href: "#luu-tru",
        image: "/images/mega-menu/stay.jpg",
      },
      {
        label: "Ẩm thực",
        href: "#am-thuc",
        image: "/images/mega-menu/dining.jpg",
      },
      {
        label: "Khám phá",
        href: "#hoat-dong",
        image: "/images/mega-menu/explore.jpg",
      },
    ],
  },
  contact: {
    label: "Liên hệ",
    href: "#lien-he",
  },
  language: {
    label: "VI",
    ariaLabel: "Ngôn ngữ: Tiếng Việt",
  },
  login: {
    label: "Đăng nhập",
    href: "#dang-nhap",
  },
  footerText: "© River Hotel Hà Tiên",
} as const;
