"use client";

import amazoneImage from "@/assets/images/amazon.png";
import acadTracxImage from "@/assets/images/acad.png";
import keeperImage from "@/assets/images/keeper.png";
import yoloImage from "@/assets/images/yolo.png";
import habifulImage from "@/assets/images/habiful.png";
import OPDImage from "@/assets/images/OPDImage.png";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  useTransform,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { IoCarSportSharp } from "react-icons/io5";

const projects = [
  { year: "2026", title: "OPD Token Engine", desc: "Smart hospital scheduling for 200+ daily patients", tags: ["Node.js", "PostgreSQL", "System Design"], link: "https://github.com/aniket1251/opd-token-allocation-engine", image: OPDImage },
  { year: "2025", title: "Habiful", desc: "End-to-end property rental platform on AWS", tags: ["Next.js", "AWS", "PostgreSQL"], link: "https://github.com/aniket1251/habiful", image: habifulImage },
  { year: "2024", title: "DistilledFloatNet", desc: "Edge-optimized real-time object detection", tags: ["YOLOv8", "Deep Learning", "Python"], link: "https://github.com/aniket1251/DistilledFloatNet", image: yoloImage },
  { year: "2023", title: "AcademiTrackX", desc: "Academic records made 40% more efficient", tags: ["Node.js", "MongoDB", "Express"], link: "https://github.com/aniket1251/AcademiTrackX", image: acadTracxImage },
  { year: "2022", title: "Amazone Clone", desc: "Full e-commerce flow with React and Redux", tags: ["React", "Redux", "Firebase"], link: "https://amazone-web.netlify.app", image: amazoneImage },
  { year: "2022", title: "Keeper", desc: "Clean note-taking app, my React origin story", tags: ["React", "Hooks"], link: "https://adoring-stonebraker-0f304d.netlify.app/", image: keeperImage },
];

const ProjectStop = ({ project, idx }: { project: typeof projects[0]; idx: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = idx % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"],
  });

  // Match the avatar's slow spring so cards move in sync with it
  const springConfig = { stiffness: 30, damping: 25 };

  const rawScale = useTransform(scrollYProgress, [0, 0.35, 0.5, 0.65, 1], [0.8, 1, 1, 1, 0.8]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 1, 1, 0]);
  const rawXLeft = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [-120, 0, 0, 0, -120]);
  const rawXRight = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [120, 0, 0, 0, 120]);

  const scale = useSpring(rawScale, springConfig);
  const cardOpacity = useSpring(rawOpacity, springConfig);
  const xLeft = useSpring(rawXLeft, springConfig);
  const xRight = useSpring(rawXRight, springConfig);

  return (
    <div ref={ref} className="relative flex items-center">
      {isLeft ? (
        <>
          <motion.div className="flex-1 hidden md:block" style={{ scale, opacity: cardOpacity, x: xLeft }}>
            <CardContent project={project} isInView={isInView} align="right" />
          </motion.div>
          <div className="shrink-0 w-12 md:w-16" />
          <div className="flex-1 hidden md:block" />
        </>
      ) : (
        <>
          <div className="flex-1 hidden md:block" />
          <div className="shrink-0 w-12 md:w-16" />
          <motion.div className="flex-1 hidden md:block" style={{ scale, opacity: cardOpacity, x: xRight }}>
            <CardContent project={project} isInView={isInView} align="left" />
          </motion.div>
        </>
      )}
      <motion.div className="flex-1 md:hidden ml-2" style={{ scale, opacity: cardOpacity, x: useSpring(useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [40, 0, 0, 0, 40]), springConfig) }}>
        <CardContent project={project} isInView={isInView} align="left" />
      </motion.div>
    </div>
  );
};

const CardContent = ({ project, isInView, align }: { project: typeof projects[0]; isInView: boolean; align: "left" | "right" }) => (
  <a href={project.link} target="_blank" className="block group">
    <div className={`bg-white rounded-2xl border border-warm-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-coral-100/60 transition-all duration-500 hover:-translate-y-1 ${align === "right" ? "md:mr-6" : "md:ml-6"}`}>
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-900/60 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
          <div className="flex items-center gap-1.5 text-white text-sm font-semibold translate-y-0 md:translate-y-3 md:group-hover:translate-y-0 transition-transform duration-500">
            <span>View Project</span>
            <ArrowUpRightIcon className="size-3.5" />
          </div>
        </div>
      </div>
      <div className="p-4 md:p-5">
        <span className="text-xs font-bold text-coral-500 bg-coral-50 px-2.5 py-0.5 rounded-full">{project.year}</span>
        <h3 className="font-serif text-lg md:text-xl text-warm-900 group-hover:text-coral-600 transition-colors duration-300 mt-2">{project.title}</h3>
        <p className="text-sm text-warm-800/50 mt-1">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.map((tag, tIdx) => (
            <motion.span
              key={tIdx}
              className="text-[11px] font-medium text-warm-800/60 bg-warm-50 border border-warm-200/60 px-2 py-0.5 rounded-full"
              initial={{ opacity: 0, y: 6 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + tIdx * 0.06 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  </a>
);

// Generate zigzag path dynamically based on number of projects
const CURVE_HEIGHT = 160; // height per curve segment
const LEFT_X = 18;
const RIGHT_X = 82;
const CENTER_X = 50;

function generateZigzagPath(count: number) {
  const totalHeight = count * CURVE_HEIGHT;
  let d = `M ${CENTER_X},0`;
  for (let i = 0; i < count; i++) {
    const targetX = i % 2 === 0 ? RIGHT_X : LEFT_X;
    const yStart = i * CURVE_HEIGHT;
    const yMid = yStart + CURVE_HEIGHT * 0.5;
    const yEnd = yStart + CURVE_HEIGHT;
    d += ` C ${i === 0 ? CENTER_X : (i % 2 === 0 ? LEFT_X : RIGHT_X)},${yMid} ${targetX},${yMid} ${targetX},${yEnd}`;
  }
  // End curve back to center
  const lastX = count % 2 === 0 ? LEFT_X : RIGHT_X;
  const endY = count * CURVE_HEIGHT + 40;
  d += ` C ${lastX},${count * CURVE_HEIGHT + 20} ${CENTER_X},${count * CURVE_HEIGHT + 20} ${CENTER_X},${endY}`;
  return { d, height: endY };
}

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathEl, setPathEl] = useState<SVGPathElement | null>(null);
  const [avatarPos, setAvatarPos] = useState({ x: 50, y: 0 });
  const [mobileCarTop, setMobileCarTop] = useState("0%");

  const { d: zigzagPath, height: svgHeight } = generateZigzagPath(projects.length);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 30%"],
  });

  const roadProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 30 });
  const avatarSpring = useSpring(scrollYProgress, { stiffness: 30, damping: 25 });

  useEffect(() => { setPathEl(pathRef.current); }, []);

  useEffect(() => {
    const unsub = avatarSpring.on("change", (v) => {
      if (!pathEl) return;
      const len = pathEl.getTotalLength();
      const pt = pathEl.getPointAtLength(v * len);
      setAvatarPos({ x: pt.x, y: pt.y });
      setMobileCarTop(`${v * 100}%`);
    });
    return unsub;
  }, [avatarSpring, pathEl]);

  return (
    <section id="projects" className="py-12 lg:py-16">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            title="WHAT I'VE BUILT"
            eyebrow="My Craft"
            description="Follow the path through my projects."
          />
        </AnimatedSection>
      </div>

      <div ref={sectionRef} className="container mt-10 relative">
        {/* SVG zigzag road — desktop only */}
        <div className="absolute hidden md:block left-1/2 -translate-x-[50px] top-0 bottom-0 w-[100px] pointer-events-none">
          <svg viewBox={`0 0 100 ${svgHeight}`} fill="none" className="w-full h-full" preserveAspectRatio="none">
            <path d={zigzagPath} stroke="rgba(255,171,148,0.12)" strokeWidth="4" strokeLinecap="round" fill="none" />
            <motion.path
              ref={pathRef}
              d={zigzagPath}
              stroke="url(#zigzagGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              style={{ pathLength: roadProgress }}
            />
            <motion.path
              d={zigzagPath}
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1"
              strokeDasharray="4 6"
              strokeLinecap="round"
              fill="none"
              style={{ pathLength: roadProgress }}
            />
            <defs>
              <linearGradient id="zigzagGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff6b3d" />
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#ff6b3d" />
              </linearGradient>
            </defs>
          </svg>

          {/* Car driving along the road */}
          <motion.div
            className="absolute w-11 h-11 md:w-12 md:h-12 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
            style={{
              left: `${avatarPos.x}%`,
              top: `${(avatarPos.y / svgHeight) * 100}%`,
            }}
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center drop-shadow-md">
                <IoCarSportSharp className="w-8 h-8 md:w-10 md:h-10 text-warm-900" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile road line + car */}
        <div className="absolute left-5 top-0 bottom-0 md:hidden">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-coral-100" />
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-[2px] origin-top"
            style={{
              scaleY: roadProgress,
              background: "linear-gradient(to bottom, #ff6b3d, #fbbf24, #ff6b3d)",
            }}
          />
          {/* Mobile car */}
          <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
            style={{ left: 0, top: mobileCarTop }}
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-8 h-8 flex items-center justify-center drop-shadow-md">
                <IoCarSportSharp className="w-6 h-6 text-warm-900" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Project stops */}
        <div className="flex flex-col gap-20 md:gap-36 relative z-10 pl-12 md:pl-0">
          {projects.map((project, idx) => (
            <ProjectStop key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
