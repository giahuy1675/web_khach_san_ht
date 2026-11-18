import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getRooms,
  RoomAmenities,
  RoomDetailIntro,
  RoomsBreadcrumb,
  RoomsGallery,
} from "@/features/rooms";

type RoomPageProps = {
  params: Promise<{ roomId: string }>;
};

// Cần cho static export (GitHub Pages): mỗi phòng được dựng sẵn thành một trang.
export const dynamicParams = false;

export async function generateStaticParams() {
  const rooms = await getRooms();
  return rooms.map((room) => ({ roomId: room.id }));
}

async function findRoom(roomId: string) {
  const rooms = await getRooms();
  return rooms.find((room) => room.id === roomId);
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const { roomId } = await params;
  const room = await findRoom(roomId);

  return {
    title: room ? `${room.name} – River Hotel Hà Tiên` : "Phòng – River Hotel Hà Tiên",
    description: room?.description,
  };
}

export default async function RoomDetailPage({ params }: RoomPageProps) {
  const { roomId } = await params;
  const room = await findRoom(roomId);

  if (!room) {
    notFound();
  }

  return (
    <>
      <RoomsBreadcrumb currentLabel={room.name} />
      <RoomsGallery />
      <RoomDetailIntro room={room} />
      <RoomAmenities />
    </>
  );
}
