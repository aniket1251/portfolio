"use client";

import { ReactNode, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Lenis from "lenis";

export const SmoothScroll = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Link Lenis to Framer Motion's useScroll
    lenis.on('scroll', () => {
      // This helps sync up scrolls if needed, though they usually work fine separately
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export const ParallaxWrapper = ({
  children,
  speed = 0.5,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * -200]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
};

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-coral-400 to-amber-400 z-[60] origin-left"
      style={{ scaleX }}
    />
  );
};
