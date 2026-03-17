"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const ScrollToTop = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setVisible(v > 0.15);
  });

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-warm-900 text-white flex items-center justify-center shadow-lg shadow-warm-900/20 hover:bg-coral-500 transition-colors duration-300"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
      transition={{ duration: 0.2 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <ArrowDown className="size-4 rotate-180" />
    </motion.button>
  );
};
