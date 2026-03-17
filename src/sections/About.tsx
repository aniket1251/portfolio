"use client";

import SectionHeader from "@/components/SectionHeader";
import { SiTypescript, SiExpress, SiJquery, SiMongodb, SiMongoose, SiPostman, SiHtml5, SiReact, SiPython, SiNodedotjs, SiGit, SiBootstrap, SiCss3, SiGithub, SiJavascript, SiDocker, SiRedux, SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import Image from "next/image";
import bookImage from "@/assets/images/TAGR.png";
import blrMap from "@/assets/images/blr-map.jpeg";
import smileImage from "@/assets/images/memoji-smile.png";
import ToolboxItems from "@/components/ToolboxItems";
import { PiFileCppFill, PiFileSqlFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { TypeWriter } from "@/components/TypeWriter";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import StarIcon from "@/assets/icons/star.svg";

const techIcons1 = [
  { title: "C++", icon: PiFileCppFill, color: "#00599C" },
  { title: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { title: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { title: "Python", icon: SiPython, color: "#3776AB" },
  { title: "SQL", icon: PiFileSqlFill, color: "#e38d13" },
  { title: "PostgreSQL", icon: BiLogoPostgresql, color: "#4169E1" },
  { title: "AWS", icon: FaAws, color: "#FF9900" },
  { title: "Git", icon: SiGit, color: "#F05032" },
  { title: "GitHub", icon: SiGithub, color: "#181717" },
  { title: "Docker", icon: SiDocker, color: "#2496ED" },
  { title: "Postman", icon: SiPostman, color: "#FF6C37" },
  { title: "VS Code", icon: VscVscode, color: "#007ACC" },
];
const techIcons2 = [
  { title: "React", icon: SiReact, color: "#61DAFB" },
  { title: "Next.js", icon: RiNextjsFill, color: "#000000" },
  { title: "Redux", icon: SiRedux, color: "#764ABC" },
  { title: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { title: "Express", icon: SiExpress, color: "#000000" },
  { title: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { title: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { title: "CSS3", icon: SiCss3, color: "#1572B6" },
  { title: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { title: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { title: "jQuery", icon: SiJquery, color: "#0769AD" },
  { title: "Mongoose", icon: SiMongoose, color: "#880000" },
];

const funFacts = [
  { emoji: "\u{2615}", text: "Coffee is a fruit" },
  { emoji: "\u{1F4DA}", text: "" },
  { emoji: "\u{1F3AC}", text: "Yeah... a heart made of FULL METAL" },
  { emoji: "\u{1F3CF}", text: "" },
  { emoji: "\u{1F30D}", text: "Based in Bangalore" },
  { emoji: "\u{1F4BB}", text: "" },
  { emoji: "\u{1F3B5}", text: "" },
  { emoji: "\u{1F4F8}", text: "Click!" },
];

const hobbies = [
  { title: "Traveling", emoji: "\u{1F30D}", left: "5%", top: "5%" },
  { title: "Cinephile", emoji: "\u{1F3AC}", left: "50%", top: "5%" },
  { title: "Sports", emoji: "\u{1F3CF}", left: "35%", top: "40%" },
  { title: "Reading", emoji: "\u{1F4DA}", left: "10%", top: "35%" },
  { title: "Music", emoji: "\u{1F3B6}", left: "70%", top: "45%" },
  { title: "Fitness", emoji: "\u{1F4AA}", left: "5%", top: "65%" },
  { title: "Photography", emoji: "\u{1F4F8}", left: "45%", top: "70%" },
];

// Fun fact card that flips on click
const FunFactCard = ({ fact, idx }: { fact: typeof funFacts[0]; idx: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="relative h-20 md:h-24 cursor-pointer perspective-[600px]"
      onClick={() => setIsFlipped(!isFlipped)}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + idx * 0.06, duration: 0.4 }}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front — emoji */}
        <div className="absolute inset-0 bg-white rounded-2xl border border-warm-200/80 flex items-center justify-center shadow-sm hover:shadow-md hover:shadow-coral-50 transition-shadow duration-300 backface-hidden">
          <span className="text-2xl md:text-3xl">{fact.emoji}</span>
        </div>
        {/* Back — text */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-coral-400 to-amber-400 rounded-2xl flex items-center justify-center p-2 md:p-3 backface-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          <span className="text-white text-xs md:text-sm font-medium text-center leading-snug">{fact.text}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const AboutSection = () => {
  const constrainRef = useRef(null);

  return (
    <div id="about" className="py-12 lg:py-16 relative">
      <div className="absolute inset-0 dot-pattern -z-10" />
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Get to Know Me"
            title="WHO I AM"
            description="Tap the cards to discover fun facts about me!"
          />
        </AnimatedSection>

        <div className="mt-8 md:mt-10 flex flex-col gap-4 md:gap-6">
          {/* Row 1: Fun Facts Grid + Book */}
          <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-5 lg:grid-cols-3">
            <AnimatedSection direction="left" delay={0.05} className="md:col-span-3 lg:col-span-2">
              <div className="bg-white/50 rounded-2xl border border-warm-200/60 p-4 md:p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <StarIcon className="size-5 md:size-6 text-coral-400" />
                  <h3 className="font-serif text-lg md:text-xl text-warm-900">Fun Facts</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                  {funFacts.map((fact, idx) => (
                    <FunFactCard key={idx} fact={fact} idx={idx} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" className="md:col-span-2 lg:col-span-1">
              <div className="bg-white rounded-2xl border border-warm-200/80 h-full min-h-[220px] md:min-h-[280px] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-coral-100/50 hover:-translate-y-1 transition-all duration-500 flex flex-col">
                <div className="flex items-center gap-2 p-4 md:p-5 pb-0">
                  <span className="text-xl md:text-2xl">{"\u{1F4D6}"}</span>
                  <h3 className="font-serif text-base md:text-lg text-warm-900">Currently Reading</h3>
                </div>
                <motion.div
                  className="w-28 md:w-36 mx-auto mt-auto pb-2"
                  whileHover={{ scale: 1.08, rotate: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src={bookImage} alt="book" />
                </motion.div>
              </div>
            </AnimatedSection>
          </div>

          {/* Row 2: Toolbox (full width) */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-warm-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-coral-100/50 transition-all duration-500 py-4 md:py-5">
              <div className="flex items-center gap-2 px-4 md:px-6 mb-3 md:mb-4">
                <span className="text-xl md:text-2xl">{"\u{1F6E0}\u{FE0F}"}</span>
                <h3 className="font-serif text-lg md:text-xl text-warm-900">My Toolbox</h3>
              </div>
              <ToolboxItems techIcons={techIcons1} itemsWrapperClassName="animate-move-left [animation-duration:45s]" />
              <ToolboxItems techIcons={techIcons2} className="mt-3 md:mt-4" itemsWrapperClassName="animate-move-right [animation-duration:40s]" />
            </div>
          </AnimatedSection>

          {/* Row 3: Hobbies + Map */}
          <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-5 lg:grid-cols-3">
            <AnimatedSection direction="left" delay={0.1} className="md:col-span-3 lg:col-span-2">
              <div className="bg-white rounded-2xl border border-warm-200/80 h-auto md:h-[300px] p-0 flex flex-col overflow-hidden shadow-sm hover:shadow-xl hover:shadow-coral-100/50 hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center gap-2 px-4 md:px-6 pt-4 md:pt-5 pb-2">
                  <span className="text-xl md:text-2xl">{"\u{1F3AE}"}</span>
                  <h3 className="font-serif text-base md:text-lg text-warm-900">When I&apos;m Not Coding</h3>
                </div>
                <div className="relative flex-1 p-6 md:p-0 flex flex-wrap gap-2 md:block" ref={constrainRef}>
                  {hobbies.map((hobby, idx) => (
                    <motion.div
                      key={idx}
                      className="hobby-item inline-flex items-center gap-1.5 px-3 md:px-4 bg-gradient-to-r from-coral-400 to-amber-400 rounded-full py-1 md:py-1.5 absolute cursor-grab active:cursor-grabbing shadow-sm hover:shadow-md"
                      style={{ left: hobby.left, top: hobby.top }}
                      drag
                      dragConstraints={constrainRef}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.08, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span className="font-medium text-white text-xs md:text-sm">{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2} className="md:col-span-2 lg:col-span-1">
              <div className="bg-white rounded-3xl border border-warm-200/80 h-[220px] md:h-[300px] p-0 relative group overflow-hidden shadow-sm hover:shadow-xl hover:shadow-coral-100/50 hover:-translate-y-1 transition-all duration-500">
                <Image src="/map.png" alt="map" fill className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <FaLocationDot className="text-coral-500 size-4" />
                    <span className="text-sm font-bold text-warm-900/60 uppercase tracking-wider">Location</span>
                  </div>
                  
                  <div className="mt-auto">
                    <h4 className="text-2xl md:text-3xl font-serif text-warm-900 leading-tight">
                      <TypeWriter words={["Bangalore,"]} typingSpeed={100} pauseTime={5000} />
                    </h4>
                    <p className="text-warm-800/50 font-medium">India</p>
                  </div>
                </div>

                {/* Pulsing Dot in Corner */}
                <div className="absolute bottom-6 right-6">
                  <div className="relative size-4">
                    <div className="absolute inset-0 rounded-full bg-coral-400 animate-ping opacity-25" />
                    <div className="absolute inset-0 rounded-full bg-coral-500 shadow-[0_0_12px_rgba(255,107,61,0.4)]" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};
