"use client";

import Image from "next/image";
import Link from "next/link";
import { A11y, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { rooms } from "@/data/hotel";

export function RoomCarousel() {
  return (
    <Swiper
      aria-label="Các loại phòng khách sạn"
      centeredSlides
      className="room-carousel"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      effect="coverflow"
      grabCursor
      modules={[A11y, EffectCoverflow, Pagination]}
      pagination={{ clickable: true }}
      slidesPerView="auto"
      a11y={{ enabled: true }}
    >
      {rooms.map((room) => (
        <SwiperSlide key={room.slug}>
          <Link
            aria-label={`Xem chi tiết ${room.name}`}
            className="room-carousel__card"
            href={`/rooms/${room.slug}`}
          >
            <Image
              alt={room.name}
              className="room-carousel__image"
              fill
              sizes="(max-width: 760px) 78vw, 420px"
              src={room.image}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
