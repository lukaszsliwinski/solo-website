"use client";

import { useEffect, useRef } from "react";

function easeInOutCubic(t: number) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function AnchorScroll() {
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const scrollToElement = (
      element: Element,
      duration = 1000
    ) => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      const startY = window.scrollY;
      const targetY =
        element.getBoundingClientRect().top + window.scrollY;

      const distance = targetY - startY;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(
          0,
          startY + distance * easeInOutCubic(progress)
        );

        if (progress < 1) {
          animationRef.current =
            requestAnimationFrame(animate);
        }
      };

      animationRef.current =
        requestAnimationFrame(animate);
    };

    const handleClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest(
        "a[href^='#']"
      );

      if (!link) return;

      const href = link.getAttribute("href");

      if (!href || href === "#") return;

      const target = document.querySelector(href);

      if (!target) return;

      event.preventDefault();

      scrollToElement(target);
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return null;
}