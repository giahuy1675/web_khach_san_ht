export const overviewContent = {
  brand: {
    name: "RIVER",
    caption: "HOTEL · HÀ TIÊN",
  },
  title: "Một kỳ nghỉ yên bình bên dòng sông Hà Tiên",
  paragraphs: [
    "Với vị trí thuận lợi tại Hà Tiên, khách sạn dễ dàng kết nối đến nhiều điểm tham quan nổi tiếng như núi Đá Dựng, Mũi Nai, chùa Tam Bảo và chợ đêm ven sông, là lựa chọn phù hợp cho cả gia đình lẫn nhóm bạn.",
    "River Hotel Hà Tiên mang đến những căn phòng hiện đại với tầm nhìn ra sông và thành phố. Tọa lạc ngay trung tâm thị xã yên bình, khách sạn có hồ bơi ngoài trời, nhà hàng đặc sản địa phương và dịch vụ đón tiễn thuận tiện cho mỗi chuyến đi.",
  ],
} as const;

export const contactContent = {
  contact: {
    label: "LIÊN HỆ",
    checkIn: "Nhận phòng 14:00",
    checkOut: "Trả phòng 12:00",
  },
  address: {
    label: "ĐỊA CHỈ",
    mapLabel: "Hiển thị bản đồ",
    mapHref: "https://www.google.com/maps/search/?api=1&query=Ha+Tien+Kien+Giang",
    distances: [
      "1,2 km từ chợ Hà Tiên",
      "3 km từ chùa Tam Bảo",
      "8 km từ Mũi Nai",
    ],
  },
  reviews: {
    label: "ĐÁNH GIÁ CỦA DU KHÁCH",
    score: 4.9,
    maxScore: 5,
    count: 1286,
    countHref: "#danh-gia",
  },
} as const;
