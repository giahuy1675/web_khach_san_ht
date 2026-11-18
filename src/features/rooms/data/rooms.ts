import type { RoomDto } from "../types";

export const roomRecords: RoomDto[] = [
  {
    roomId: "standard",
    name: "Phòng tiêu chuẩn",
    description: "Không gian nghỉ tiện nghi với nội thất hiện đại và cửa sổ rộng.",
    maxOccupancy: 2,
  },
  {
    roomId: "deluxe",
    name: "Phòng cao cấp",
    description: "Thêm diện tích thư giãn, phù hợp cho kỳ nghỉ dài ngày.",
    maxOccupancy: 3,
  },
  {
    roomId: "family",
    name: "Phòng gia đình",
    description: "Nơi ở thoải mái cho gia đình với không gian linh hoạt.",
    maxOccupancy: 4,
  },
];
