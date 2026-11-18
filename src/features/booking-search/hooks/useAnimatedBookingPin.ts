"use client";

import { useEffect, useRef, useState } from "react";

export default function useAnimatedBookingPin() {
  const [isPinned, setIsPinned] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [travelY, setTravelY] = useState(0);
  const [tabsTravelY, setTabsTravelY] = useState(0);
  const [slotHeight, setSlotHeight] = useState<number | null>(null);
  const [tabsHeight, setTabsHeight] = useState<number | null>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const tabsSlotRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isPinnedRef = useRef(false);
  const targetPinnedRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const pinnedAnimationRef = useRef<Animation | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;
      const shouldPin = currentScrollY > 24;

      if (currentScrollY <= 24) {
        pinnedAnimationRef.current?.cancel();
        setIsHidden(false);
        setIsPinned(false);
        setIsAnimating(false);
        setTravelY(0);
        setTabsTravelY(0);
        setSlotHeight(null);
        setTabsHeight(null);
        isPinnedRef.current = false;
        targetPinnedRef.current = false;
        return;
      }

      if (isScrollingUp) {
        setIsHidden(true);
        setIsAnimating(true);
        setTravelY(-window.innerHeight);
        setTabsTravelY(-window.innerHeight);
        targetPinnedRef.current = false;
        return;
      }

      if (shouldPin && !targetPinnedRef.current) {
        targetPinnedRef.current = true;
        setIsHidden(false);
        const form = formRef.current;
        const formBounds = form?.getBoundingClientRect();
        if (formBounds) {
          setSlotHeight(formBounds.height);
        }
        setTravelY(0);
        setIsPinned(true);
        setIsAnimating(false);
        isPinnedRef.current = true;

        pinnedAnimationRef.current?.cancel();
        window.setTimeout(() => {
          const form = formRef.current;
          if (!form || !targetPinnedRef.current) {
            return;
          }
          pinnedAnimationRef.current = form.animate(
            [
              { transform: `translateY(${formBounds?.top ?? 24}px)`, opacity: 0.2 },
              { transform: "translateY(0)", opacity: 1 },
            ],
            {
              duration: 320,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            },
          );
        }, 24);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      pinnedAnimationRef.current?.cancel();
      targetPinnedRef.current = false;
    };
  }, []);

  return {
    isPinned,
    isHidden,
    isAnimating,
    travelY,
    tabsTravelY,
    slotHeight,
    tabsHeight,
    slotRef,
    tabsSlotRef,
    tabsRef,
    formRef,
  };
}
