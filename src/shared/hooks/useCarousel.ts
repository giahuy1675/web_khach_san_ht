"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

const DRAG_THRESHOLD = 5;
const OVERSCROLL_RESISTANCE = 0.35;
const MOMENTUM_MS = 180;
const FREE_MOMENTUM_MS = 450;
const FREE_TRANSITION = "transform 1000ms cubic-bezier(0.16, 1, 0.3, 1)";
const STALE_VELOCITY_MS = 80;

type CarouselOptions = {
  // true: thả tay thì khớp vào từng thẻ; false: trượt tự do theo đà rồi giảm tốc.
  snap?: boolean;
};

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

export default function useCarousel(
  trackRef: RefObject<HTMLElement | null>,
  itemCount: number,
  options: CarouselOptions = {},
) {
  const snap = options.snap ?? true;
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

    // Trượt tự do tới vị trí mới (đã kẹp trong giới hạn) bằng easing giảm tốc dài.
    const glideTo = (offset: number) => {
      const bounds = measure(track);
      const clamped = Math.min(Math.max(offset, -(bounds?.maxScroll ?? 0)), 0);
      track.style.transition = FREE_TRANSITION;
      track.style.transform = `translate3d(${clamped}px, 0, 0)`;
    };

    const handleResize = () => (snap ? goTo(indexRef.current) : glideTo(currentOffset()));

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
      // Dừng animation đang chạy để bắt được băng chuyền ngay giữa lúc đang trượt.
      render(startOffset, false);
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

      if (!metrics || metrics.step === 0) {
        return;
      }

      if (performance.now() - lastTime > STALE_VELOCITY_MS) {
        velocity = 0;
      }

      if (!snap) {
        glideTo(currentOffset() + (moved ? velocity * FREE_MOMENTUM_MS : 0));
        return;
      }

      if (!moved) {
        goTo(indexRef.current);
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
  }, [goTo, itemCount, render, snap, trackRef]);

  return { isDragging };
}
