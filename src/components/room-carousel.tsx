"use client";

import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { RoomCard } from "@/components/room-card";
import { rooms } from "@/data/hotel";

export function RoomCarousel() {
  return (
    <Swiper
      aria-label="Các loại phòng khách sạn"
      breakpoints={{
        0: { slidesPerView: 1.08, spaceBetween: 16 },
        600: { slidesPerView: 2, spaceBetween: 18 },
        1000: { slidesPerView: 3, spaceBetween: 22 },
      }}
      className="room-carousel"
      modules={[A11y, Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      slidesPerGroup={1}
      a11y={{ enabled: true }}
    >
      {rooms.map((room) => (
        <SwiperSlide key={room.name}>
          <RoomCard {...room} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
