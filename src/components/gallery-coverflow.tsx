"use client";

import Image from "next/image";
import { A11y, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { gallery } from "@/data/hotel";

export function GalleryCoverflow() {
  return (
    <Swiper
      aria-label="Thư viện ảnh khách sạn"
      className="gallery-coverflow"
      centeredSlides
      coverflowEffect={{
        rotate: 28,
        stretch: 0,
        depth: 110,
        modifier: 1,
        slideShadows: false,
      }}
      effect="coverflow"
      grabCursor
      loop
      modules={[A11y, EffectCoverflow, Pagination]}
      pagination={{ clickable: true }}
      slidesPerView="auto"
      a11y={{ enabled: true }}
    >
      {gallery.map((item, index) => (
        <SwiperSlide key={item.image}>
          <figure className="gallery-coverflow__slide">
            <Image
              alt={item.alt}
              className="gallery-coverflow__image"
              fill
              sizes="(max-width: 760px) 84vw, 680px"
              src={item.image}
            />
            <figcaption className="gallery-coverflow__caption">
              <span>{item.alt}</span>
              <span>0{index + 1} / 03</span>
            </figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
