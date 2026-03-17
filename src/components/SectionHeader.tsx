"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      <div className="flex justify-center">
        <motion.p
          className="uppercase font-semibold tracking-widest text-sm bg-gradient-to-r from-coral-500 to-amber-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {title}
        </motion.p>
      </div>
      <motion.h2
        className="font-serif text-3xl md:text-5xl text-center mt-6 text-warm-900"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {eyebrow}
      </motion.h2>
      <motion.p
        className="text-center md:text-lg lg:text-xl text-warm-800/60 mt-4 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default SectionHeader;
