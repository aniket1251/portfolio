"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 10,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);
      setIsVisible(y < lastScrollY || y < 100);
      setLastScrollY(y);
      const sections = ["home", "journey", "projects", "about", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: "home", label: "Home", short: "Home" },
    { id: "journey", label: "Journey", short: "Journey" },
    { id: "projects", label: "Projects", short: "Work" },
    { id: "about", label: "About", short: "About" },
    { id: "contact", label: "Contact", short: "Chat" },
  ];

  return (
    <motion.div
      className="flex justify-center items-center fixed top-4 w-full z-50 px-3"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -80, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <motion.nav
        className="flex items-center gap-0.5 px-1.5 py-1.5 rounded-full border backdrop-blur-2xl"
        animate={{
          backgroundColor: isScrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.72)",
          borderColor: isScrolled ? "rgba(255,171,148,0.15)" : "rgba(0,0,0,0.04)",
          boxShadow: isScrolled
            ? "0 8px 40px rgba(255,107,61,0.06), 0 2px 8px rgba(0,0,0,0.04)"
            : "0 4px 20px rgba(0,0,0,0.02)",
        }}
        transition={{ duration: 0.5 }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const isHov = hovered === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm font-medium"
              whileTap={{ scale: 0.95 }}
            >
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-coral-400 to-amber-400 shadow-sm shadow-coral-200/40"
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                />
              )}
              {!isActive && isHov && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-warm-100/60"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              {/* Short text on mobile, full on desktop */}
              <span className={`relative z-10 md:hidden text-[12px] font-medium transition-colors duration-300 ${isActive ? "text-white font-semibold" : "text-warm-800/50"}`}>
                {item.short}
              </span>
              <span
                className={`relative z-10 hidden md:inline transition-colors duration-300 ${
                  isActive ? "text-white font-semibold" : "text-warm-800/50 hover:text-warm-800"
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-coral-400 hidden md:block"
                  layoutId="activeDot"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </motion.nav>
    </motion.div>
  );
};
