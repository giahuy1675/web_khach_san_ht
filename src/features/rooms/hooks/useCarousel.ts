"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

const DRAG_THRESHOLD = 5;
const OVERSCROLL_RESISTANCE = 0.35;
const MOMENTUM_MS = 180;

type Metrics = {
  step: number;
  maxScroll: number;
  maxIndex: number;
};

function measure(track: HTMLElement): Metrics | null {
  const cards = track.children;
  const first = cards[0] as HTMLElement | undefined;
  const last = cards[cards.length - 1] as HTMLElement | undefined;
  const viewport = track.parentElement?.clientWidth ?? 0;

  if (!first || !last) {
    return null;
  }

  const gutter = parseFloat(getComputedStyle(track).paddingLeft) || 0;
  const second = cards[1] as HTMLElement | undefined;
  const step = second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
  const maxScroll = Math.max(0, last.offsetLeft + last.offsetWidth + gutter - viewport);

  return { step, maxScroll, maxIndex: step > 0 ? Math.ceil(maxScroll / step) : 0 };
}

export default function useCarousel(trackRef: RefObject<HTMLElement | null>, itemCount: number) {
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const indexRef = useRef(0);

  const render = useCallback(
    (x: number, animate: boolean) => {
      const track = trackRef.current;
      if (!track) {
        return;
      }
      track.style.transition = animate ? "" : "none";
      track.style.transform = `translate3d(${x}px, 0, 0)`;
    },
    [trackRef],
  );

  const goTo = useCallback(
    (nextIndex: number) => {
      const track = trackRef.current;
      const metrics = track && measure(track);
      if (!metrics) {
        return;
      }
      const clamped = Math.min(Math.max(nextIndex, 0), metrics.maxIndex);
      indexRef.current = clamped;
      setIndex(clamped);
      setMaxIndex(metrics.maxIndex);
      render(-Math.min(clamped * metrics.step, metrics.maxScroll), true);
    },
    [render, trackRef],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track || itemCount === 0) {
      return;
    }

    let isDown = false;
    let moved = false;
    let startX = 0;
    let startOffset = 0;
    let lastX = 0;
    let lastTime = 0;
    let velocity = 0;
    let metrics = measure(track);

    const currentOffset = () => {
      const matrix = new DOMMatrixReadOnly(getComputedStyle(track).transform);
      return matrix.m41;
    };

    const handleResize = () => goTo(indexRef.current);

    const handleDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }
      metrics = measure(track);
      isDown = true;
      moved = false;
      startX = event.clientX;
      lastX = event.clientX;
      lastTime = performance.now();
      velocity = 0;
      startOffset = currentOffset();
    };

    const handleMove = (event: PointerEvent) => {
      if (!isDown || !metrics) {
        return;
      }
      const delta = event.clientX - startX;
      if (!moved && Math.abs(delta) > DRAG_THRESHOLD) {
        moved = true;
        setIsDragging(true);
      }
      if (!moved) {
        return;
      }

      const now = performance.now();
      const elapsed = now - lastTime;
      if (elapsed > 0) {
        velocity = (event.clientX - lastX) / elapsed;
      }
      lastX = event.clientX;
      lastTime = now;

      let next = startOffset + delta;
      const min = -metrics.maxScroll;
      if (next > 0) {
        next *= OVERSCROLL_RESISTANCE;
      } else if (next < min) {
        next = min + (next - min) * OVERSCROLL_RESISTANCE;
      }
      render(next, false);
    };

    const handleUp = () => {
      if (!isDown) {
        return;
      }
      isDown = false;
      setIsDragging(false);

      if (!moved || !metrics || metrics.step === 0) {
        return;
      }

      const projected = currentOffset() + velocity * MOMENTUM_MS;
      goTo(Math.round(-projected / metrics.step));
    };

    // Chặn click vào link/nút ngay sau khi kéo.
    const handleClick = (event: MouseEvent) => {
      if (moved) {
        event.preventDefault();
        event.stopPropagation();
        moved = false;
      }
    };

    setMaxIndex(metrics?.maxIndex ?? 0);
    track.addEventListener("pointerdown", handleDown);
    track.addEventListener("click", handleClick, true);
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointercancel", handleUp);
    window.addEventListener("resize", handleResize);

    return () => {
      track.removeEventListener("pointerdown", handleDown);
      track.removeEventListener("click", handleClick, true);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);
      window.removeEventListener("resize", handleResize);
    };
  }, [goTo, itemCount, render, trackRef]);

  return {
    isDragging,
    canPrev: index > 0,
    canNext: index < maxIndex,
    prev: () => goTo(indexRef.current - 1),
    next: () => goTo(indexRef.current + 1),
  };
}
