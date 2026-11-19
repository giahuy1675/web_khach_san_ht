"use client";

import { useEffect, useRef, useState } from "react";

const PIN_OFFSET = 24;
// Dưới ngưỡng này thanh tìm kiếm xếp nhiều hàng nên không ghim (tránh để lại khoảng trống lớn).
const PIN_MEDIA_QUERY = "(min-width: 1101px)";

export default function useAnimatedBookingPin() {
  const [isPinned, setIsPinned] = useState(false);
  const [slotHeight, setSlotHeight] = useState<number | null>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const media = window.matchMedia(PIN_MEDIA_QUERY);
    let pinned = false;
    let frame = 0;

    const update = () => {
      frame = 0;
      const shouldPin = media.matches && window.scrollY > PIN_OFFSET;

      if (shouldPin === pinned) {
        return;
      }
      pinned = shouldPin;

      if (shouldPin) {
        // Đo chiều cao khi form còn nằm trong dòng chảy để giữ chỗ khi nó bị ghim.
        const height = formRef.current?.getBoundingClientRect().height;
        setSlotHeight(height ?? null);
      } else {
        setSlotHeight(null);
      }
      setIsPinned(shouldPin);
    };

    const handleScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    media.addEventListener("change", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      media.removeEventListener("change", handleScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return { isPinned, slotHeight, slotRef, formRef };
}
