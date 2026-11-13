"use client";

import { useEffect, useRef, useState } from "react";

export default function useAnimatedBookingPin() {
  const [isPinned, setIsPinned] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [travelY, setTravelY] = useState(0);
  const [slotHeight, setSlotHeight] = useState<number | null>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isPinnedRef = useRef(false);
  const targetPinnedRef = useRef(false);
  const animationTimerRef = useRef<number | null>(null);
  const returnTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const shouldPin = window.scrollY > 24;

      if (shouldPin === targetPinnedRef.current) {
        return;
      }

      targetPinnedRef.current = shouldPin;

      if (returnTimerRef.current !== null) {
        window.clearTimeout(returnTimerRef.current);
        returnTimerRef.current = null;
      }

      if (animationTimerRef.current !== null) {
        window.clearTimeout(animationTimerRef.current);
        animationTimerRef.current = null;
      }

      const headerBottom =
        document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;

      if (shouldPin) {
        if (isPinnedRef.current) {
          setIsAnimating(true);
          setTravelY(0);
          return;
        }

        const form = formRef.current;
        if (!form) {
          return;
        }

        const formBounds = form.getBoundingClientRect();
        setSlotHeight(formBounds.height);
        setTravelY(formBounds.top - headerBottom);
        setIsPinned(true);
        setIsAnimating(false);
        isPinnedRef.current = true;

        animationTimerRef.current = window.setTimeout(() => {
          if (targetPinnedRef.current) {
            setIsAnimating(true);
            setTravelY(0);
          }
        }, 20);
        return;
      }

      const slotTop = slotRef.current?.getBoundingClientRect().top;
      if (slotTop === undefined) {
        return;
      }

      setIsAnimating(true);
      setTravelY(slotTop - headerBottom);
      returnTimerRef.current = window.setTimeout(() => {
        if (!targetPinnedRef.current) {
          setIsPinned(false);
          setIsAnimating(false);
          setTravelY(0);
          setSlotHeight(null);
          isPinnedRef.current = false;
        }
      }, 380);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationTimerRef.current !== null) {
        window.clearTimeout(animationTimerRef.current);
      }
      if (returnTimerRef.current !== null) {
        window.clearTimeout(returnTimerRef.current);
      }
      targetPinnedRef.current = false;
    };
  }, []);

  return {
    isPinned,
    isAnimating,
    travelY,
    slotHeight,
    slotRef,
    formRef,
  };
}
