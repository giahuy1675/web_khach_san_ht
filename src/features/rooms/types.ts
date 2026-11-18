export type RoomDto = {
  roomId: string;
  name: string;
  description: string;
  maxOccupancy: number;
  highlights: string[];
};

export type Room = {
  id: string;
  name: string;
  description: string;
  maxGuests: number;
  highlights: string[];
};
