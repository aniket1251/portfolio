"use client";

import ArrowDown from "@/assets/icons/arrow-down.svg";
import { GoDownload } from "react-icons/go";
import { track } from "@vercel/analytics";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";
import { TextReveal } from "@/components/TextReveal";
import { useRef } from "react";
import { FloatingParticles } from "@/components/FloatingParticles";
import { TypeWriter } from "@/components/TypeWriter";
import { TiltCard } from "@/components/TiltCard";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Aniket-CV.pdf";
    link.download = "Aniket-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    track("Download CV", { file: "Aniket-CV.pdf" });
  };

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 10, behavior: "smooth" });
  };

  return (
    <div ref={heroRef} id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <FloatingParticles count={25} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-coral-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50/60 rounded-full blur-[100px]" />
        <motion.div
          className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-coral-200/20 rounded-full blur-[80px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container pt-28 pb-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div style={{ y: contentY }} className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div {...fadeUp(0.2)} className="inline-flex items-center gap-2 bg-white border border-warm-200 px-4 py-1.5 rounded-full mb-6">
              <div className="bg-green-500 size-2 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large" />
              </div>
              <span className="text-sm text-warm-800/70 font-medium">Available for opportunities</span>
            </motion.div>

            <TextReveal
              text="Hey, I'm Aniket."
              as="h1"
              className="font-serif text-4xl md:text-6xl tracking-tight text-warm-900"
              delay={0.4}
            />

            <motion.p {...fadeUp(0.8)} className="mt-2 font-serif text-xl md:text-2xl text-coral-500">
              I{" "}
              <TypeWriter
                words={["build things for the web.", "craft delightful UIs.", "love solving problems.", "turn ideas into code."]}
                typingSpeed={70}
                deletingSpeed={40}
                pauseTime={2500}
              />
            </motion.p>

            <motion.p {...fadeUp(1.0)} className="mt-6 text-warm-800/60 md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
              A software developer who loves turning ideas into fast, scalable, and delightful applications.
              I care about clean code, great user experiences, and making the web a better place.
            </motion.p>

            <motion.div {...fadeUp(1.3)} className="flex flex-col md:flex-row justify-center lg:justify-start items-stretch md:items-center mt-8 gap-3 w-full md:w-auto">
              <MagneticButton
                onClick={() => handleScroll("projects")}
                className="inline-flex items-center justify-center gap-2 bg-warm-900 text-white px-6 h-12 rounded-xl transition-all duration-300 hover:bg-warm-800 active:scale-95 shadow-md shadow-warm-900/15 hover:shadow-lg hover:shadow-warm-900/20"
              >
                <span className="font-semibold">See my work</span>
                <ArrowDown className="size-4" />
              </MagneticButton>
              <MagneticButton
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 border border-warm-200 bg-white text-warm-900 px-6 h-12 rounded-xl transition-all duration-300 hover:border-coral-200 hover:bg-coral-50/50 active:scale-95"
              >
                <GoDownload size="18px" />
                <span className="font-medium">Download CV</span>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div style={{ y: photoY }} className="order-1 lg:order-2 flex justify-center">
            <motion.div
              {...fadeUp(0.3)}
              className="relative"
            >
              <TiltCard className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-coral-200/40 via-amber-100/30 to-coral-100/20 rounded-3xl blur-2xl" />
              <div className="relative w-48 h-60 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-2 border-white shadow-2xl shadow-warm-900/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/aniket-hero.png"
                  alt="Aniket Gautam"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              </TiltCard>
              {/* Decorative dots */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 grid grid-cols-3 gap-1.5">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-coral-300"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + i * 0.05 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-[11px] text-warm-800/30 uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-warm-800/15 flex justify-center pt-1.5"
          animate={{ borderColor: ["rgba(44,42,38,0.15)", "rgba(255,107,61,0.3)", "rgba(44,42,38,0.15)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-1.5 rounded-full bg-coral-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
