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
      { label: "Các chương hiệu", href: "#uu-dai", active: false },
      { label: "Khơi nguồn cảm hứng", href: "#hoat-dong", active: false },
      { label: "MeliáRewards", href: "#dang-nhap", active: false },
    ],
    sidebar: {
      eyebrow: "KHÁCH SẠN",
      description: "Trải nghiệm du lịch thực sự khó quên",
      heading: "Các điểm đến",
      links: [
        { label: "Để xuất của chúng tôi", href: "#uu-dai" },
        { label: "Các loại khách sạn", href: "#luu-tru" },
      ],
      contactLabel: "Liên hệ khách sạn",
      contactHref: "#lien-he",
    },
    cards: [
      {
        label: "Châu Á và Châu Đại Dương",
        href: "#hoat-dong",
        image: "/images/mega-menu/ha-tien.jpg",
      },
      {
        label: "Châu Âu",
        href: "#luu-tru",
        image: "/images/mega-menu/stay.jpg",
      },
      {
        label: "Châu Phi và Trung Đông",
        href: "#am-thuc",
        image: "/images/mega-menu/dining.jpg",
      },
      {
        label: "Châu Mỹ",
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
  footer: {
    address: "Hà Tiên, Kiên Giang, Việt Nam",
    phone: "+84 297 000 0000",
    email: "hello@riverhotel.vn",
  },
} as const;
