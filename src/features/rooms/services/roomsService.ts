import { ApiError, apiClient } from "@/shared/lib/apiClient";
import { roomRecords } from "../data/rooms";
import type { Room, RoomDto } from "../types";

function isRoomDto(value: unknown): value is RoomDto {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const room = value as Record<string, unknown>;
  return (
    typeof room.roomId === "string" &&
    typeof room.name === "string" &&
    typeof room.description === "string" &&
    typeof room.maxOccupancy === "number"
  );
}

function mapRoomDto(dto: RoomDto): Room {
  return {
    id: dto.roomId,
    name: dto.name,
    description: dto.description,
    maxGuests: dto.maxOccupancy,
  };
}

export async function getRooms(): Promise<Room[]> {
  return roomRecords.map(mapRoomDto);
}

export async function getRoomsFromApi(): Promise<Room[]> {
  const payload = await apiClient.request("/rooms");

  if (!Array.isArray(payload) || !payload.every(isRoomDto)) {
    throw new ApiError("API trả về danh sách phòng không đúng định dạng.", 502);
  }

  return payload.map(mapRoomDto);
}
