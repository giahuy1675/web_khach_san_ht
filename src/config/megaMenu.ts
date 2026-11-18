const images = {
  stay: "/images/mega-menu/stay.jpg",
  haTien: "/images/mega-menu/ha-tien.jpg",
  dining: "/images/mega-menu/dining.jpg",
  explore: "/images/mega-menu/explore.jpg",
} as const;

export const megaMenuPanels = {
  brands: {
    filters: [
      { id: "all", label: "TẤT CẢ" },
      { id: "luxury", label: "LUXURY" },
      { id: "premium", label: "PREMIUM" },
      { id: "essential", label: "ESSENTIAL" },
    ],
    exploreLabel: "Khám phá thương hiệu của chúng tôi",
    exploreHref: "#luu-tru",
    items: [
      { name: "RIVER", caption: "HOTELS & RESORTS", tier: "luxury", href: "#luu-tru", image: images.haTien },
      { name: "RIVER VILLAS", caption: "BY RIVER", tier: "luxury", href: "#luu-tru", image: images.stay },
      { name: "RIVER RESORT", caption: "BY RIVER", tier: "luxury", href: "#luu-tru", image: images.dining },
      { name: "RIVER SUITES", caption: "BY RIVER", tier: "premium", href: "#luu-tru", image: images.explore },
      { name: "RIVER HOTEL", caption: "HÀ TIÊN", tier: "premium", href: "#luu-tru", image: images.haTien },
      { name: "RIVER RESIDENCE", caption: "BY RIVER", tier: "premium", href: "#luu-tru", image: images.stay },
      { name: "RIVER STAY", caption: "BY RIVER", tier: "essential", href: "#luu-tru", image: images.dining },
      { name: "RIVER INN", caption: "BY RIVER", tier: "essential", href: "#luu-tru", image: images.explore },
      { name: "RIVER CAMP", caption: "BY RIVER", tier: "essential", href: "#luu-tru", image: images.haTien },
    ],
  },
  inspiration: {
    eyebrow: "KHƠI NGUỒN CẢM HỨNG",
    description: "Hơn cả một nơi lưu trú: hương vị, phong cách và văn hóa Hà Tiên",
    sections: [
      {
        id: "dining",
        label: "Ẩm thực",
        heading: "Tinh hoa ẩm thực trong mỗi chuyến đi",
        subheading: "Tận hưởng niềm vui du lịch và ẩm thực cùng lúc",
        text: "Từ nhà hàng ven sông đến hải sản tươi của vùng biển Hà Tiên: những trải nghiệm ẩm thực sẽ biến mọi chuyến đi thành hành trình vị giác khó quên.",
        cards: [
          { title: "Nhà hàng River", subtitle: "Hà Tiên", image: images.dining, href: "#am-thuc" },
          { title: "Cà phê bên sông", subtitle: "Hà Tiên", image: images.stay, href: "#am-thuc" },
          { title: "Hải sản địa phương", subtitle: "Hà Tiên", image: images.haTien, href: "#am-thuc" },
        ],
      },
      {
        id: "experiences",
        label: "Trải nghiệm",
        heading: "Mỗi ngày một điều mới mẻ",
        subheading: "Khám phá thiên nhiên và văn hóa vùng đất biên giới",
        text: "Leo núi Đá Dựng, dạo quanh thành phố ven sông hay thư giãn bên hồ bơi: lịch trình linh hoạt cho mọi kỳ nghỉ.",
        cards: [
          { title: "Núi Đá Dựng", subtitle: "Hà Tiên", image: images.explore, href: "#hoat-dong" },
          { title: "Thành phố ven sông", subtitle: "Hà Tiên", image: images.haTien, href: "#hoat-dong" },
          { title: "Hồ bơi River", subtitle: "Hà Tiên", image: images.stay, href: "#dich-vu" },
        ],
      },
      {
        id: "blog",
        label: "Blog",
        heading: "Câu chuyện từ dòng sông",
        subheading: "Cẩm nang và cảm hứng cho chuyến đi của bạn",
        text: "Mẹo du lịch, lịch trình gợi ý và những câu chuyện về con người, món ăn và cảnh sắc Hà Tiên.",
        cards: [
          { title: "Lịch trình 3 ngày", subtitle: "Cẩm nang", image: images.explore, href: "#hoat-dong" },
          { title: "Món ngon phải thử", subtitle: "Ẩm thực", image: images.dining, href: "#am-thuc" },
          { title: "Nghỉ dưỡng cuối tuần", subtitle: "Gợi ý", image: images.stay, href: "#luu-tru" },
        ],
      },
    ],
  },
  rewards: {
    heading: "Khám phá RiverRewards",
    subheading: "Chìa khóa đến thế giới đặc quyền của bạn",
    text: "Đăng ký và nhận ưu đãi độc quyền ngay từ lần đặt phòng đầu tiên. Chương trình của chúng tôi mang đến cho bạn những lợi ích và trải nghiệm độc đáo tại khách sạn.",
    login: { label: "Đăng nhập", href: "#dang-nhap" },
    register: { label: "Đăng ký", href: "#dang-nhap" },
    moreLabel: "Tìm hiểu thêm",
    slides: [
      {
        image: images.stay,
        heading: "Hơn cả một kỳ nghỉ",
        subheading: "Trở thành thành viên mang đến cho bạn những lợi ích độc quyền",
        text: "Tham gia RiverRewards và tích lũy, sử dụng hoặc tặng điểm khi bạn lưu trú, thưởng thức ẩm thực tại nhà hàng và thư giãn tại khu nghỉ dưỡng.",
        href: "#dang-nhap",
      },
      {
        image: images.dining,
        heading: "Ưu đãi ẩm thực",
        subheading: "Điểm thưởng cho mỗi bữa ăn tại nhà hàng",
        text: "Thành viên nhận ưu đãi riêng và quà tặng dành cho các bữa ăn tại nhà hàng của khách sạn.",
        href: "#am-thuc",
      },
      {
        image: images.explore,
        heading: "Trải nghiệm riêng",
        subheading: "Đặc quyền cho các hoạt động quanh Hà Tiên",
        text: "Dùng điểm để đổi các hoạt động và dịch vụ đón tiễn trong suốt hành trình của bạn.",
        href: "#hoat-dong",
      },
    ],
  },
} as const;
