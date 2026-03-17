"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const x = useSpring(cursorX, { damping: 20, stiffness: 300 });
  const y = useSpring(cursorY, { damping: 20, stiffness: 300 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a") || t.closest("button") || t.tagName === "A" || t.tagName === "BUTTON") {
        setIsHovering(true);
      }
    };

    const out = () => setIsHovering(false);
    const leave = () => setIsVisible(false);
    const enter = () => setIsVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block rounded-full"
      style={{ x, y }}
      animate={{
        width: isHovering ? 40 : 8,
        height: isHovering ? 40 : 8,
        opacity: isVisible ? 1 : 0,
        translateX: isHovering ? -20 : -4,
        translateY: isHovering ? -20 : -4,
        backgroundColor: isHovering ? "rgba(255,107,61,0.1)" : "rgba(28,25,23,0.8)",
        borderWidth: isHovering ? 2 : 0,
        borderColor: "rgba(255,107,61,0.4)",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
  );
};
