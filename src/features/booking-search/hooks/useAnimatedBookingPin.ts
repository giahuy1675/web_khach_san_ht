"use client";

import { useEffect, useRef, useState } from "react";

const PIN_OFFSET = 24;
const DIRECTION_THRESHOLD = 6;

export default function useAnimatedBookingPin() {
  const [isPinned, setIsPinned] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [slotHeight, setSlotHeight] = useState<number | null>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let pinned = false;
    let frame = 0;

    const update = () => {
      frame = 0;
      const currentScrollY = window.scrollY;

      if (currentScrollY <= PIN_OFFSET) {
        pinned = false;
        lastScrollY = currentScrollY;
        setIsPinned(false);
        setIsHidden(false);
        setSlotHeight(null);
        return;
      }

      const delta = currentScrollY - lastScrollY;
      if (Math.abs(delta) < DIRECTION_THRESHOLD) {
        return;
      }
      lastScrollY = currentScrollY;

      if (!pinned) {
        pinned = true;
        const height = formRef.current?.getBoundingClientRect().height;
        setSlotHeight(height ?? null);
        setIsPinned(true);
      }
      setIsHidden(delta < 0);
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

  return { isPinned, isHidden, slotHeight, slotRef, formRef };
}
