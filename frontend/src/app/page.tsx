import { BookingSearchBar } from "@/features/booking-search";
import { HomeIntro } from "@/features/home";
import { HotelContactInfo, HotelOverview } from "@/features/hotel-overview";
import { HotelServices } from "@/features/hotel-services";
import { HotelDining } from "@/features/hotel-dining";
import { HotelEvents } from "@/features/hotel-events";
import { HotelGallery } from "@/features/hotel-gallery";
import { HotelMap } from "@/features/hotel-map";
import { HotelRecommendations } from "@/features/hotel-recommendations";
import { HotelFaq } from "@/features/hotel-faq";
import { HotelBrands } from "@/features/hotel-brands";
import { RoomList } from "@/features/rooms";

export default function Home() {
  return (
    <>
      <HomeIntro />
      <BookingSearchBar />
      <HotelOverview />
      <HotelContactInfo />
      <RoomList />
      <HotelGallery />
      <HotelServices />
      <HotelDining />
      <HotelMap />
      <HotelEvents />
      <HotelRecommendations />
      <HotelFaq />
      <HotelBrands />
    </>
  );
}
