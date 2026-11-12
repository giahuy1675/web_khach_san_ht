import { publicAssetPath } from "@/lib/public-asset";

export const hotel = {
  name: "River Hotel",
  fullName: "River Hotel Hà Tiên",
  location: "Hà Tiên, An Giang",
  address: "Trường Sa, Lô B3, TTTM Trần Hầu, Phường Hà Tiên, Tỉnh An Giang",
  coordinates: "10.37998285209119, 104.48647407116414",
  phone: "02973 955 888",
  email: "salesriver01@gmail.com",
};

export const rooms = [
  {
    slug: "deluxe-double-sea-view",
    name: "Deluxe Double Sea View",
    description: "Phòng nghỉ hướng biển với không gian thoáng đãng.",
    image: publicAssetPath("/images/DELUXE-DOUBLE-SEA-VIEW-1-770x550.png"),
    samplePrice: "850.000đ",
    sampleSize: "30 m²",
    sampleGuests: "2 khách",
    sampleBed: "1 giường đôi",
    sampleAmenities: "Wi-Fi · Điều hòa · TV",
    sampleDetailAmenities: ["Wi-Fi miễn phí", "Điều hòa", "TV màn hình phẳng", "Minibar", "Phòng tắm riêng", "Máy sấy tóc"],
  },
  {
    slug: "family-city-view",
    name: "Family City View",
    description: "Không gian rộng rãi với tầm nhìn hướng thành phố.",
    image: publicAssetPath("/images/FAMILY-CITY-VIEW-6-scaled-770x550.jpg"),
    samplePrice: "1.200.000đ",
    sampleSize: "40 m²",
    sampleGuests: "4 khách",
    sampleBed: "2 giường đôi",
    sampleAmenities: "Wi-Fi · Điều hòa · TV",
    sampleDetailAmenities: ["Wi-Fi miễn phí", "Điều hòa", "TV màn hình phẳng", "Minibar", "Phòng tắm riêng", "Bàn làm việc", "Tủ quần áo"],
  },
  {
    slug: "family-river-view",
    name: "Family River View",
    description: "Phòng gia đình với khung cửa sổ nhìn ra sông.",
    image: publicAssetPath("/images/FAMILY-RIVER-VIEW-1-770x550.png"),
    samplePrice: "1.350.000đ",
    sampleSize: "42 m²",
    sampleGuests: "4 khách",
    sampleBed: "2 giường đôi",
    sampleAmenities: "Wi-Fi · Điều hòa · TV",
    sampleDetailAmenities: ["Wi-Fi miễn phí", "Điều hòa", "TV màn hình phẳng", "Minibar", "Phòng tắm riêng", "Máy sấy tóc", "Tủ quần áo"],
  },
  {
    slug: "junior-suite",
    name: "Junior Suite",
    description: "Khu vực nghỉ ngơi và tiếp khách trong cùng một không gian.",
    image: publicAssetPath("/images/JUNIOR-SUITE-1-770x550.png"),
    samplePrice: "1.500.000đ",
    sampleSize: "45 m²",
    sampleGuests: "2 khách",
    sampleBed: "1 giường đôi",
    sampleAmenities: "Wi-Fi · Điều hòa · Khu tiếp khách",
    sampleDetailAmenities: ["Wi-Fi miễn phí", "Điều hòa", "TV màn hình phẳng", "Minibar", "Phòng tắm riêng", "Khu vực tiếp khách", "Ấm đun nước"],
  },
  {
    slug: "president-suite",
    name: "President Suite",
    description: "Hạng phòng suite với khu vực sinh hoạt rộng rãi.",
    image: publicAssetPath("/images/PRESIDENT-SUITE1-770x550.png"),
    samplePrice: "2.500.000đ",
    sampleSize: "70 m²",
    sampleGuests: "2 khách",
    sampleBed: "1 giường cỡ lớn",
    sampleAmenities: "Wi-Fi · Điều hòa · Khu tiếp khách",
    sampleDetailAmenities: ["Wi-Fi miễn phí", "Điều hòa", "TV màn hình phẳng", "Minibar", "Phòng tắm riêng", "Phòng khách riêng", "Ấm đun nước", "Máy sấy tóc"],
  },
  {
    slug: "superior-double-city-view",
    name: "Superior Double City View",
    description: "Phòng giường đôi với tầm nhìn hướng thành phố.",
    image: publicAssetPath("/images/SUPERIOR-DOUBLE-CITY-VIEW-1-770x550.png"),
    samplePrice: "650.000đ",
    sampleSize: "25 m²",
    sampleGuests: "2 khách",
    sampleBed: "1 giường đôi",
    sampleAmenities: "Wi-Fi · Điều hòa · TV",
    sampleDetailAmenities: ["Wi-Fi miễn phí", "Điều hòa", "TV màn hình phẳng", "Minibar", "Phòng tắm riêng", "Bàn làm việc"],
  },
  {
    slug: "superior-double-river-view",
    name: "Superior Double River View",
    description: "Phòng giường đôi với tầm nhìn hướng sông.",
    image: publicAssetPath("/images/UPERIOR-DOUBLE-RIVER-VIEW-1-770x550.png"),
    samplePrice: "750.000đ",
    sampleSize: "27 m²",
    sampleGuests: "2 khách",
    sampleBed: "1 giường đôi",
    sampleAmenities: "Wi-Fi · Điều hòa · TV",
    sampleDetailAmenities: ["Wi-Fi miễn phí", "Điều hòa", "TV màn hình phẳng", "Minibar", "Phòng tắm riêng", "Máy sấy tóc"],
  },
  {
    slug: "superior-triple-river-view",
    name: "Superior Triple River View",
    description: "Phòng nghỉ hướng sông dành cho nhóm khách.",
    image: publicAssetPath("/images/SUPERIOR-TRIPLE-RIVER-VIEW-1-770x550.png"),
    samplePrice: "950.000đ",
    sampleSize: "32 m²",
    sampleGuests: "3 khách",
    sampleBed: "1 giường đôi + 1 giường đơn",
    sampleAmenities: "Wi-Fi · Điều hòa · TV",
    sampleDetailAmenities: ["Wi-Fi miễn phí", "Điều hòa", "TV màn hình phẳng", "Minibar", "Phòng tắm riêng", "Tủ quần áo", "Ấm đun nước"],
  },
  {
    slug: "superior-twin-river-view",
    name: "Superior Twin River View",
    description: "Phòng hai giường đơn với tầm nhìn hướng sông.",
    image: publicAssetPath("/images/SUPERIOR-TWIN-RIVER-VIEW-1-770x550.png"),
    samplePrice: "750.000đ",
    sampleSize: "27 m²",
    sampleGuests: "2 khách",
    sampleBed: "2 giường đơn",
    sampleAmenities: "Wi-Fi · Điều hòa · TV",
    sampleDetailAmenities: ["Wi-Fi miễn phí", "Điều hòa", "TV màn hình phẳng", "Minibar", "Phòng tắm riêng", "Bàn làm việc"],
  },
];

export const experiences = [
  {
    number: "01",
    title: "Nghỉ ngơi trọn vẹn",
    description:
      "Tạm gác nhịp sống bận rộn, dành thời gian thư giãn trong không gian nghỉ dưỡng tại River Hotel.",
    image: publicAssetPath("/images/FAMILY-RIVER-VIEW-1-770x550.png"),
  },
  {
    number: "02",
    title: "Nếm vị địa phương",
    description:
      "Thưởng thức món ngon địa phương và những hương vị đặc trưng của vùng biển Tây Nam.",
    image: publicAssetPath("/images/nha-hang.webp"),
  },
  {
    number: "03",
    title: "Khám phá Hà Tiên",
    description:
      "Khám phá những bãi biển, điểm tham quan và nét duyên riêng của Hà Tiên cùng vùng biển Tây Nam.",
    image: publicAssetPath("/images/travel-beach.webp"),
  },
];

export const shopProducts = [
  {
    name: "Hộp quà Hà Tiên",
    price: "350.000đ",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Hộp quà được gói nơ",
  },
  {
    name: "Cà phê River Hotel",
    price: "120.000đ",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Tách cà phê trên bàn",
  },
  {
    name: "Túi du lịch River Hotel",
    price: "180.000đ",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Ba lô du lịch",
  },
  {
    name: "Voucher nghỉ dưỡng",
    price: "1.500.000đ",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Khu nghỉ dưỡng có hồ bơi",
  },
];

export const gallery = [
  {
    alt: "Toàn cảnh khách sạn River bên bờ biển Hà Tiên",
    image: publicAssetPath("/images/toan-canh-3.webp"),
  },
  {
    alt: "Nhà hàng với các món ăn đa dạng",
    image: publicAssetPath("/images/nha-hang.webp"),
  },
  {
    alt: "Khu vực buffet sáng tại nhà hàng",
    image: publicAssetPath("/images/bufer-sang.webp"),
  },
];
