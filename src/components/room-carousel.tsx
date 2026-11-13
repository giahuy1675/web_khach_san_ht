"use client";

import Image from "next/image";
import Link from "next/link";
import { A11y, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { rooms } from "@/data/hotel";
import { Icon } from "@/components/icons";

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
        <SwiperSlide key={room.name}>
          <article className="room-carousel__card">
            <Link
              aria-label={`Xem chi tiết ${room.name}`}
              className="room-carousel__link"
              href={`/rooms/${room.slug}`}
            >
              <Image
                alt={room.name}
                className="room-carousel__image"
                fill
                sizes="(max-width: 760px) 78vw, 420px"
                src={room.image}
              />
              <span aria-hidden="true" className="room-carousel__shade" />
              <div className="room-carousel__content">
                <span className="eyebrow eyebrow--light">PHÒNG NGHỈ RIVER HOTEL</span>
                <h3>{room.name}</h3>
                <p>{room.description}</p>
                <div className="room-carousel__details">
                  <strong>{room.samplePrice}<small> / đêm · giá mẫu</small></strong>
                  <span>{room.sampleSize} · {room.sampleGuests}</span>
                </div>
                <span className="room-carousel__detail-link">
                  Xem chi tiết phòng <Icon name="arrow" />
                </span>
              </div>
            </Link>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
