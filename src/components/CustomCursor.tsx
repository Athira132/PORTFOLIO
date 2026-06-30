"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;
    if (!cursorDot || !cursorRing) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsHidden(false);
    };

    const onMouseLeave = () => {
      setIsHidden(true);
    };

    const onMouseEnter = () => {
      setIsHidden(false);
    };

    // Listen to mouse activities
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Hover effect listeners for tags, buttons, anchors, inputs
    const addHoverListeners = () => {
      const targets = document.querySelectorAll("a, button, [role='button'], input, textarea, .interactive-hover");
      targets.forEach((target) => {
        target.addEventListener("mouseenter", () => setIsHovered(true));
        target.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    // Call hover listeners initially
    addHoverListeners();

    // Create an observer to attach hover effects to dynamically loaded elements
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    // Custom requestAnimationFrame loop for smooth ring lag effect
    let animationFrameId: number;
    
    const updateCursor = () => {
      // Direct positioning for dot
      if (cursorDot) {
        cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Smooth lag interpolation for the ring
      const ease = 0.15;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (cursorRing) {
        cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updateCursor);
    };

    updateCursor();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Small direct dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 bg-electric-blue rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Lagging ring follower */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-electric-blue/30 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color,opacity] duration-300 ease-out ${
          isHidden ? "opacity-0" : "opacity-100"
        } ${
          isHovered
            ? "w-14 h-14 bg-electric-blue/5 border-electric-blue/50 scale-110"
            : ""
        }`}
      />
    </>
  );
}
