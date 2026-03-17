"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MagneticButton } from "@/components/MagneticButton";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const socials = [
  { icon: SiGithub, url: "https://github.com/aniket1251", label: "GitHub" },
  { icon: SiLinkedin, url: "https://www.linkedin.com/in/aniket1251/", label: "LinkedIn" },
  { icon: SiLeetcode, url: "https://leetcode.com/u/deCoder1205/", label: "LeetCode" },
  { icon: SiGeeksforgeeks, url: "https://www.geeksforgeeks.org/user/ag1276fo/", label: "GfG" },
];

export const ContactSection = () => {
  const handleContactClick = () => {
    const email = "ag125aa@gmail.com";
    const subject = encodeURIComponent("Let's work together");
    const body = encodeURIComponent("Hi Aniket,\n\nI'd like to discuss a project with you.");
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    try {
      window.location.href = mailtoLink;
      setTimeout(() => { window.open(gmailLink, "_blank"); }, 1000);
    } catch { window.open(gmailLink, "_blank"); }
  };

  return (
    <div id="contact" className="pt-4 pb-6">
      <div className="container">
        <AnimatedSection>
          <motion.div
            className="bg-gradient-to-r from-coral-400 to-amber-400 text-white py-10 px-8 md:px-14 rounded-3xl text-center md:text-left relative overflow-hidden shadow-xl shadow-coral-200/30"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/10"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
            />
            <div className="flex flex-col gap-6 items-center md:flex-row md:gap-12 relative z-10">
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl">Let&apos;s build something together.</h2>
                <div className="flex items-center justify-center md:justify-start gap-3 mt-5">
                  {socials.map((s, i) => (
                    <motion.a
                      key={i}
                      href={s.url}
                      target="_blank"
                      className="w-11 h-11 rounded-full bg-warm-900/80 backdrop-blur-sm flex items-center justify-center hover:bg-warm-900 text-white transition-all duration-300 border border-warm-900/90 hover:border-warm-900 hover:shadow-md hover:shadow-warm-900/20"
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={s.label}
                      title={s.label}
                    >
                      <s.icon className="size-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
              <MagneticButton
                onClick={handleContactClick}
                strength={0.4}
                className="bg-white text-warm-900 inline-flex items-center justify-center px-7 h-12 rounded-xl gap-2 w-full md:w-auto font-semibold transition-all duration-300 hover:bg-white/95 hover:shadow-lg hover:shadow-white/20 active:scale-95 group shrink-0"
              >
                <span>Say Hello</span>
                <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </MagneticButton>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
};
