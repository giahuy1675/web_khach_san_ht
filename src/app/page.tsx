import { BookingSearchBar } from "@/features/booking-search";
import { HomeIntro } from "@/features/home";
import { RoomList } from "@/features/rooms";
import HotelExperience from "@/features/home/components/HotelExperience";

export default function Home() {
  return (
    <>
      <HomeIntro />
      <BookingSearchBar />
      <RoomList />
      <HotelExperience />
    </>
  );
}
