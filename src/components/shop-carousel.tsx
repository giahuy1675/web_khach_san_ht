"use client";

import Image from "next/image";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { shopProducts } from "@/data/hotel";

export function ShopCarousel() {
  return (
    <Swiper
      aria-label="Sản phẩm minh họa của River Hotel"
      breakpoints={{
        0: { slidesPerView: 1.08, spaceBetween: 16 },
        600: { slidesPerView: 2, spaceBetween: 18 },
        1000: { slidesPerView: 3, spaceBetween: 22 },
      }}
      className="shop-carousel"
      modules={[A11y, Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      slidesPerGroup={1}
      a11y={{ enabled: true }}
    >
      {shopProducts.map((product) => (
        <SwiperSlide key={product.name}>
          <article className="shop-card">
            <div className="shop-card__image-wrap">
              <Image
                alt={product.imageAlt}
                className="shop-card__image"
                fill
                sizes="(max-width: 720px) 84vw, (max-width: 1100px) 45vw, 30vw"
                src={product.image}
                unoptimized
              />
              <span className="shop-card__image-label">Ảnh mẫu</span>
            </div>
            <div className="shop-card__content">
              <h3>{product.name}</h3>
              <strong>Giá mẫu: {product.price}</strong>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
