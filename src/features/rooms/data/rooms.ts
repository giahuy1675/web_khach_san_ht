import type { RoomDto } from "../types";

export const roomRecords: RoomDto[] = [
  {
    roomId: "standard",
    name: "Phòng tiêu chuẩn",
    description:
      "Không gian nghỉ tiện nghi với nội thất hiện đại và cửa sổ rộng đón ánh sáng tự nhiên. Phòng có giường êm, bàn làm việc nhỏ, minibar và phòng tắm đầy đủ tiện nghi cho kỳ nghỉ thoải mái.",
    maxOccupancy: 2,
    highlights: ["Tầm nhìn thành phố", "Giường đôi hoặc 2 giường đơn", "28 m²"],
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    roomId: "deluxe",
    name: "Phòng cao cấp",
    description:
      "Thêm diện tích thư giãn, phù hợp cho kỳ nghỉ dài ngày. Phòng có khu vực ngồi riêng, ban công hướng sông và phòng tắm với vòi sen riêng biệt cùng bồn tắm.",
    maxOccupancy: 3,
    highlights: ["Tầm nhìn ra sông", "Giường cỡ King", "36 m²"],
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    roomId: "family",
    name: "Phòng gia đình",
    description:
      "Nơi ở thoải mái cho gia đình với không gian linh hoạt. Phòng có hai khu vực nghỉ, ghế sofa và đầy đủ tiện ích dành cho trẻ em, thích hợp cho tối đa 4 khách.",
    maxOccupancy: 4,
    highlights: ["Tầm nhìn ra vườn", "Giường cỡ King và 2 giường đơn", "48 m²"],
    gallery: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    roomId: "river-view",
    name: "Phòng hướng sông",
    description:
      "Cửa kính lớn hướng thẳng ra dòng sông, đón bình minh và hoàng hôn ngay từ giường ngủ. Phòng có ban công riêng, khu vực ngồi uống trà và phòng tắm với vòi sen kiểu mưa.",
    maxOccupancy: 2,
    highlights: ["Tầm nhìn ra sông", "Giường cỡ King", "34 m²"],
    gallery: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    roomId: "junior-suite",
    name: "Junior Suite",
    description:
      "Không gian rộng rãi với khu vực tiếp khách tách biệt, ghế sofa và bàn ăn nhỏ. Phù hợp cho kỳ nghỉ dài ngày hoặc các cặp đôi muốn thêm sự riêng tư.",
    maxOccupancy: 3,
    highlights: ["Tầm nhìn thành phố và sông", "Giường cỡ King", "52 m²"],
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    roomId: "executive-suite",
    name: "Executive Suite",
    description:
      "Căn suite cao cấp nhất của khách sạn với phòng khách riêng, phòng ngủ rộng và bồn tắm đặt cạnh cửa sổ nhìn ra toàn cảnh Hà Tiên. Bao gồm đón tiễn và bữa sáng tại phòng.",
    maxOccupancy: 4,
    highlights: ["Toàn cảnh thành phố", "Giường cỡ King và sofa giường", "78 m²"],
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    roomId: "twin",
    name: "Phòng hai giường đơn",
    description:
      "Bố trí hai giường đơn tiện lợi cho nhóm bạn hoặc đồng nghiệp, với bàn làm việc, minibar và phòng tắm đầy đủ tiện nghi.",
    maxOccupancy: 2,
    highlights: ["Tầm nhìn ra vườn", "2 giường đơn", "30 m²"],
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    roomId: "connecting",
    name: "Phòng thông nhau",
    description:
      "Hai phòng liền kề có cửa thông nhau, lý tưởng cho nhóm đông người hoặc hai gia đình đi cùng. Mỗi phòng có phòng tắm riêng và đầy đủ tiện ích.",
    maxOccupancy: 6,
    highlights: ["Tầm nhìn ra sông", "2 giường cỡ King", "72 m²"],
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];
