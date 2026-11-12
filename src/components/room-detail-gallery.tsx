"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type RoomGalleryItem = {
  slug: string;
  name: string;
  image: string;
  isCurrentRoom: boolean;
};

type RoomDetailGalleryProps = {
  roomName: string;
  items: RoomGalleryItem[];
};

export function RoomDetailGallery({ roomName, items }: RoomDetailGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const activeItem = items[activeIndex];

  useEffect(() => {
    if (isPaused || items.length < 2) return;

    const intervalId = window.setInterval(() => {
      if (!document.hidden && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setActiveIndex((index) => (index + 1) % items.length);
      }
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, items.length]);

  function showSlide(index: number) {
    setActiveIndex((index + items.length) % items.length);
  }

  return (
    <div
      aria-label={`Thư viện ảnh ${roomName}`}
      aria-roledescription="carousel"
      className="room-detail__gallery"
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
      onFocusCapture={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        aria-label={`Ảnh ${activeItem.name}`}
        className="room-detail__gallery-main"
        onTouchEnd={(event) => {
          if (touchStartX.current === null) return;
          const delta = event.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(delta) > 45) showSlide(activeIndex + (delta < 0 ? 1 : -1));
          touchStartX.current = null;
        }}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
        }}
        role="group"
      >
        <figure className="room-detail__gallery-slide" key={activeItem.slug}>
          <Image
            alt={activeItem.isCurrentRoom
              ? `${roomName} tại khách sạn`
              : `Ảnh tham khảo phòng ${activeItem.name}`}
            className="room-detail__gallery-image"
            fill
            priority={activeIndex === 0}
            sizes="(max-width: 760px) 100vw, 65vw"
            src={activeItem.image}
          />
          <figcaption className="room-detail__gallery-caption">
            <span>{activeItem.isCurrentRoom ? "PHÒNG ĐANG XEM" : "ẢNH THAM KHẢO"}</span>
            <strong>{activeItem.isCurrentRoom ? roomName : activeItem.name}</strong>
          </figcaption>
        </figure>
        <button
          aria-label="Ảnh trước"
          className="room-detail__gallery-arrow room-detail__gallery-arrow--prev"
          onClick={() => showSlide(activeIndex - 1)}
          type="button"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          aria-label="Ảnh tiếp theo"
          className="room-detail__gallery-arrow room-detail__gallery-arrow--next"
          onClick={() => showSlide(activeIndex + 1)}
          type="button"
        >
          <span aria-hidden="true">›</span>
        </button>
        <span aria-live="polite" className="room-detail__gallery-count">
          {String(activeIndex + 1).padStart(2, "0")} <span>/</span> {String(items.length).padStart(2, "0")}
        </span>
        <div aria-label="Chọn ảnh" className="room-detail__gallery-pagination">
          {items.map((item, index) => (
            <button
              aria-current={activeIndex === index ? "true" : undefined}
              aria-label={`Hiển thị ảnh ${index + 1}: ${item.name}`}
              className={activeIndex === index ? "is-active" : undefined}
              key={item.slug}
              onClick={() => showSlide(index)}
              type="button"
            />
          ))}
        </div>
      </div>
      <div aria-label="Chọn ảnh xem trước" className="room-detail__gallery-thumbs">
        {items.slice(1).map((item, index) => {
          const slideIndex = index + 1;
          return (
            <button
              aria-label={`Xem ảnh ${item.name}`}
              aria-pressed={activeIndex === slideIndex}
              className={`room-detail__gallery-thumb${activeIndex === slideIndex ? " is-active" : ""}`}
              key={item.slug}
              onClick={() => showSlide(slideIndex)}
              type="button"
            >
              <Image
                alt=""
                className="room-detail__gallery-thumb-image"
                fill
                sizes="(max-width: 760px) 40vw, 25vw"
                src={item.image}
              />
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
