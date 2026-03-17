"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="py-8">
      <div className="container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-warm-800/25 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Aniket Gautam
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
