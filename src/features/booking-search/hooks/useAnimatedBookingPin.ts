"use client";

import { useEffect, useRef, useState } from "react";

const PIN_OFFSET = 24;

export default function useAnimatedBookingPin() {
  const [isPinned, setIsPinned] = useState(false);
  const [slotHeight, setSlotHeight] = useState<number | null>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    let pinned = false;
    let frame = 0;

    const update = () => {
      frame = 0;
      const shouldPin = window.scrollY > PIN_OFFSET;

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return { isPinned, slotHeight, slotRef, formRef };
}
