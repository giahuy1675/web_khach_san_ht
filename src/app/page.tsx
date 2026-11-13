import { BookingSearchBar } from "@/features/booking-search";
import { HomeIntro } from "@/features/home";
import { RoomList } from "@/features/rooms";

export default function Home() {
  return (
    <>
      <HomeIntro />
      <BookingSearchBar />
      <RoomList />
    </>
  );
}
