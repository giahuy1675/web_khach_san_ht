"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

const DRAG_THRESHOLD = 5;
const MOMENTUM_MS = 180;
const SETTLE_FALLBACK_MS = 800;

function measure(track: HTMLElement) {
  const first = track.children[0] as HTMLElement | undefined;
  const second = track.children[1] as HTMLElement | undefined;
  const viewport = track.parentElement?.clientWidth ?? 0;

  if (!first) {
    return null;
  }

  const step = second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
  return { step, center: viewport / 2 - first.offsetWidth / 2 };
}

/**
 * Băng chuyền vô hạn: track chứa 3 bản sao của danh sách ảnh, vị trí luôn
 * được đưa về bản sao ở giữa sau mỗi lần trượt nên có thể kéo vòng liên tục.
 */
export default function useLoopCarousel(trackRef: RefObject<HTMLElement | null>, count: number) {
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const positionRef = useRef(count);
  const isDownRef = useRef(false);
  const settleTimerRef = useRef<number | null>(null);

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

  const settle = useCallback(() => {
    const track = trackRef.current;
    const metrics = track && measure(track);
    if (!metrics || isDownRef.current) {
      return;
    }

    let position = positionRef.current;
    if (position < count) {
      position += count;
    } else if (position >= count * 2) {
      position -= count;
    }
    positionRef.current = position;
    setActive(position % count);
    render(metrics.center - position * metrics.step, false);
  }, [count, render, trackRef]);

  const goTo = useCallback(
    (target: number) => {
      const track = trackRef.current;
      const metrics = track && measure(track);
      if (!metrics) {
        return;
      }

      const position = Math.min(Math.max(target, 1), count * 3 - 2);
      positionRef.current = position;
      setActive(((position % count) + count) % count);
      render(metrics.center - position * metrics.step, true);

      if (settleTimerRef.current) {
        window.clearTimeout(settleTimerRef.current);
      }
      settleTimerRef.current = window.setTimeout(settle, SETTLE_FALLBACK_MS);
    },
    [count, render, settle, trackRef],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track || count === 0) {
      return;
    }

    let moved = false;
    let startX = 0;
    let startOffset = 0;
    let lastX = 0;
    let lastTime = 0;
    let velocity = 0;
    let latestOffset = 0;

    const currentOffset = () => new DOMMatrixReadOnly(getComputedStyle(track).transform).m41;

    const handleDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }
      isDownRef.current = true;
      moved = false;
      startX = event.clientX;
      lastX = event.clientX;
      lastTime = performance.now();
      velocity = 0;
      startOffset = currentOffset();
      latestOffset = startOffset;
      render(startOffset, false);
    };

    const handleMove = (event: PointerEvent) => {
      const metrics = measure(track);
      if (!isDownRef.current || !metrics) {
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
      if (now > lastTime) {
        velocity = (event.clientX - lastX) / (now - lastTime);
      }
      lastX = event.clientX;
      lastTime = now;

      const maxX = metrics.center - metrics.step;
      const minX = metrics.center - (count * 3 - 2) * metrics.step;
      latestOffset = Math.min(Math.max(startOffset + delta, minX), maxX);
      render(latestOffset, false);
    };

    const handleUp = () => {
      if (!isDownRef.current) {
        return;
      }
      isDownRef.current = false;
      setIsDragging(false);

      const metrics = measure(track);
      if (!moved || !metrics) {
        return;
      }

      const projected = latestOffset + velocity * MOMENTUM_MS;
      goTo(Math.round((metrics.center - projected) / metrics.step));
    };

    // Chặn click vào ảnh ngay sau khi vừa kéo.
    const handleClick = (event: MouseEvent) => {
      if (moved) {
        event.preventDefault();
        event.stopPropagation();
        moved = false;
      }
    };

    const handleTransitionEnd = (event: TransitionEvent) => {
      if (event.target === track && event.propertyName === "transform") {
        settle();
      }
    };

    const handleResize = () => {
      const metrics = measure(track);
      if (metrics) {
        render(metrics.center - positionRef.current * metrics.step, false);
      }
    };

    handleResize();
    track.addEventListener("pointerdown", handleDown);
    track.addEventListener("click", handleClick, true);
    track.addEventListener("transitionend", handleTransitionEnd);
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointercancel", handleUp);
    window.addEventListener("resize", handleResize);

    return () => {
      track.removeEventListener("pointerdown", handleDown);
      track.removeEventListener("click", handleClick, true);
      track.removeEventListener("transitionend", handleTransitionEnd);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);
      window.removeEventListener("resize", handleResize);
      if (settleTimerRef.current) {
        window.clearTimeout(settleTimerRef.current);
      }
    };
  }, [count, goTo, render, settle, trackRef]);

  return {
    active,
    isDragging,
    prev: () => goTo(positionRef.current - 1),
    next: () => goTo(positionRef.current + 1),
    goTo,
  };
}
