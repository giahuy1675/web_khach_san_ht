"use client";

import Image from "next/image";
import { useRef, useState, useSyncExternalStore } from "react";
import { A11y, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { publicAssetPath } from "@/lib/public-asset";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const mediaQuery = window.matchMedia(reducedMotionQuery);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getReducedMotionPreference() {
  return window.matchMedia(reducedMotionQuery).matches;
}

const slides = [
  {
    src: publicAssetPath("/images/toan-canh-3.webp"),
    alt: "Toàn cảnh khách sạn River bên bờ biển Hà Tiên",
  },
  {
    src: publicAssetPath("/images/travel-mountain.webp"),
    alt: "Hồ nước giữa núi non trong một chuyến du lịch",
  },
  {
    src: publicAssetPath("/images/travel-beach.webp"),
    alt: "Bãi biển nhiệt đới trong xanh",
  },
];

export function HeroSlideshow() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const countdownRef = useRef<HTMLSpanElement>(null);
  const [paused, setPaused] = useState(false);
  const [userStarted, setUserStarted] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionPreference,
    () => false,
  );
  const autoplayPaused = paused || (prefersReducedMotion && !userStarted);

  function toggleAutoplay() {
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (autoplayPaused) {
      swiper.autoplay.start();
      setUserStarted(true);
      setPaused(false);
    } else {
      swiper.autoplay.stop();
      setPaused(true);
    }
  }

  return (
    <>
      <Swiper
        aria-label="Ảnh khách sạn và điểm đến du lịch"
        autoplay={autoplayPaused ? false : { delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        className="hero__slideshow"
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        modules={[A11y, Autoplay, EffectFade]}
        onAutoplayTimeLeft={(swiper, timeLeft, progress) => {
          swiper.el.style.setProperty("--autoplay-progress", String(1 - progress));
          if (countdownRef.current) {
            countdownRef.current.textContent = `${Math.ceil(timeLeft / 1000)}`;
          }
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        a11y={{ enabled: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.src}>
            <Image
              alt={slide.alt}
              className="hero__image"
              fill
              priority={index === 0}
              quality={90}
              sizes="100vw"
              src={slide.src}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div aria-label="Tiến độ tự chuyển ảnh" className="hero__autoplay">
        <svg aria-hidden="true" viewBox="0 0 44 44">
          <circle className="hero__autoplay-track" cx="22" cy="22" r="20" />
          <circle className="hero__autoplay-ring" cx="22" cy="22" r="20" />
        </svg>
        <span aria-live="off" className="hero__autoplay-count" ref={countdownRef}>6</span>
        <button
          aria-label={autoplayPaused ? "Tiếp tục tự chuyển ảnh" : "Tạm dừng tự chuyển ảnh"}
          aria-pressed={autoplayPaused}
          className="hero__autoplay-toggle"
          onClick={toggleAutoplay}
          type="button"
        >
          {autoplayPaused ? "▶" : "Ⅱ"}
        </button>
      </div>
    </>
  );
}
