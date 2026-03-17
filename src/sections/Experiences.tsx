"use client";

import SectionHeader from "@/components/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { useRef } from "react";

const journey = [
  {
    name: "Kalam Solutions",
    period: "May 2024 - July 2024",
    role: "Software Developer Intern",
    type: "Remote",
    emoji: "\u{1F680}",
    highlights: [
      "Shipped 5+ backend API features with Node.js and Express, cutting response times by 20-25%",
      "Connected 10+ REST endpoints to the frontend, powering a platform with 300+ active users",
      "Strengthened system reliability through rigorous API testing and code reviews",
    ],
  },
  {
    name: "CoachBudy",
    period: "March 2022 - July 2022",
    role: "Full-Stack Developer Intern",
    type: "Remote",
    emoji: "\u{1F331}",
    highlights: [
      "Crafted responsive dashboards with React and Tailwind CSS that students actually loved using",
      "Built 15+ RESTful APIs powering student, coaching, and admin workflows end-to-end",
      "Designed role-based auth that reduced access issues by 30% across three user portals",
    ],
  },
];

const TimelineDot = ({ emoji }: { emoji: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="absolute left-6 md:left-1/2 -translate-x-1/2 flex z-10">
      <motion.div
        className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-white border-2 border-coral-200 flex items-center justify-center text-sm md:text-xl shadow-sm"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
        whileHover={{ scale: 1.2, borderColor: "rgb(255,107,61)" }}
      >
        {emoji}
      </motion.div>
    </div>
  );
};

export const ExperiencesSection = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 50%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="journey" className="py-12 lg:py-16 relative">
      <div className="absolute inset-0 dot-pattern -z-10" />
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            title="MY JOURNEY"
            eyebrow="Where I've Been"
            description="Every role taught me something new. Here's the story so far."
          />
        </AnimatedSection>

        <div ref={timelineRef} className="mt-16 md:mt-20 relative">
          {/* Animated timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-warm-200/50" />
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px origin-top"
            style={{
              scaleY,
              background: "linear-gradient(to bottom, #ffab94, #fbbf24, #ffab94)",
            }}
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {journey.map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.2} direction={idx % 2 === 0 ? "left" : "right"}>
                <div className={`flex flex-col md:flex-row items-start gap-6 md:gap-12 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <TimelineDot emoji={item.emoji} />

                  <div className={`ml-10 md:ml-0 md:w-[calc(50%-3rem)] ${idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-warm-200/80 shadow-sm hover:shadow-xl hover:shadow-coral-100/60 hover:-translate-y-1 transition-all duration-500 group/card">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-coral-500 uppercase tracking-wider">{item.name}</span>
                        <span className="text-warm-800/30">&bull;</span>
                        <span className="text-sm text-warm-800/50">{item.type}</span>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl text-warm-900 mt-1 group-hover/card:text-coral-600 transition-colors duration-300">{item.role}</h3>
                      <p className="text-sm text-warm-800/40 mt-1">{item.period}</p>
                      <hr className="border-warm-100 my-4" />
                      <StaggerContainer className="flex flex-col gap-3" staggerDelay={0.08}>
                        {item.highlights.map((point, pIdx) => (
                          <StaggerItem key={pIdx}>
                            <div className="flex gap-2 text-sm md:text-base text-warm-800/70 leading-relaxed">
                              <span className="text-coral-400 mt-0.5 shrink-0">&#9657;</span>
                              <span>{point}</span>
                            </div>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
