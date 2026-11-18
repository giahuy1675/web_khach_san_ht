import type { Metadata } from "next";
import { roomsPageContent } from "@/config/roomsPage";
import { getRooms, RoomLinkList, RoomsBreadcrumb } from "@/features/rooms";

export const metadata: Metadata = {
  title: roomsPageContent.metaTitle,
  description: roomsPageContent.metaDescription,
};

export default async function RoomsPage() {
  const rooms = await getRooms();

  return (
    <>
      <RoomsBreadcrumb />
      <RoomLinkList rooms={rooms} />
    </>
  );
}
