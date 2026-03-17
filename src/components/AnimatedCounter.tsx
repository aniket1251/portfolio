"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const AnimatedCounter = ({
  target,
  suffix = "",
  label,
  duration = 2,
}: {
  target: number;
  suffix?: string;
  label: string;
  duration?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || hasAnimated || !numRef.current) return;
    setHasAnimated(true);
    const node = numRef.current;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      node.textContent = Math.round(target * eased).toString();
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, hasAnimated, target, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="font-serif text-4xl md:text-5xl text-warm-900">
        <span ref={numRef}>0</span>
        <span className="text-coral-500">{suffix}</span>
      </div>
      <p className="text-sm text-warm-800/50 mt-2 font-medium">{label}</p>
    </motion.div>
  );
};
