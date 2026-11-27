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
    { label: "Sự kiện", href: "#su-kien" },
  ],
  megaMenu: {
    tabs: [
      { id: "hotels", label: "Khách sạn" },
      { id: "brands", label: "Các thương hiệu" },
      { id: "inspiration", label: "Khơi nguồn cảm hứng" },
      { id: "rewards", label: "RiverRewards" },
    ],
    sidebar: {
      eyebrow: "KHÁCH SẠN",
      description: "Trải nghiệm du lịch thực sự khó quên",
      heading: "Các điểm đến",
      links: [
        { label: "Đề xuất của chúng tôi", href: "#uu-dai" },
        { label: "Các loại khách sạn", href: "#luu-tru" },
      ],
      contactLabel: "Liên hệ khách sạn",
      contactHref: "#lien-he",
    },
    cards: [
      {
        label: "Châu Á và Châu Đại Dương",
        href: "#gioi-thieu",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
      },
      {
        label: "Châu Âu",
        href: "#luu-tru",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
      },
      {
        label: "Châu Phi và Trung Đông",
        href: "#am-thuc",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      },
      {
        label: "Châu Mỹ",
        href: "#gioi-thieu",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
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
