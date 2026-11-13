export type RoomDto = {
  roomId: string;
  name: string;
  description: string;
  maxOccupancy: number;
};

export type Room = {
  id: string;
  name: string;
  description: string;
  maxGuests: number;
};
