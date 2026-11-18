export type RoomDto = {
  roomId: string;
  name: string;
  description: string;
  maxOccupancy: number;
  // Thứ tự cố định: [tầm nhìn, loại giường, diện tích]
  highlights: string[];
};

export type Room = {
  id: string;
  name: string;
  description: string;
  maxGuests: number;
  highlights: string[];
};
