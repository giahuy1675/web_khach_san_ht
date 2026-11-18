import type { RoomDto } from "../types";

export const roomRecords: RoomDto[] = [
  {
    roomId: "standard",
    name: "Phòng tiêu chuẩn",
    description:
      "Không gian nghỉ tiện nghi với nội thất hiện đại và cửa sổ rộng đón ánh sáng tự nhiên. Phòng có giường êm, bàn làm việc nhỏ, minibar và phòng tắm đầy đủ tiện nghi cho kỳ nghỉ thoải mái.",
    maxOccupancy: 2,
    highlights: ["Tầm nhìn thành phố", "Giường đôi hoặc 2 giường đơn", "28 m²"],
  },
  {
    roomId: "deluxe",
    name: "Phòng cao cấp",
    description:
      "Thêm diện tích thư giãn, phù hợp cho kỳ nghỉ dài ngày. Phòng có khu vực ngồi riêng, ban công hướng sông và phòng tắm với vòi sen riêng biệt cùng bồn tắm.",
    maxOccupancy: 3,
    highlights: ["Tầm nhìn ra sông", "Giường cỡ King", "36 m²"],
  },
  {
    roomId: "family",
    name: "Phòng gia đình",
    description:
      "Nơi ở thoải mái cho gia đình với không gian linh hoạt. Phòng có hai khu vực nghỉ, ghế sofa và đầy đủ tiện ích dành cho trẻ em, thích hợp cho tối đa 4 khách.",
    maxOccupancy: 4,
    highlights: ["Tầm nhìn ra vườn", "Giường cỡ King và 2 giường đơn", "48 m²"],
  },
];
