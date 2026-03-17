"use client";

import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const GlowCard = ({
  className = "",
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      className={twMerge("relative group", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={style}
    >
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]"
        style={{
          background: isHovered
            ? `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,107,61,0.15), rgba(251,191,36,0.08), transparent 70%)`
            : "none",
        }}
      />
      <div className="relative bg-white rounded-2xl overflow-hidden border border-warm-200/80 transition-all duration-500 hover:shadow-xl hover:shadow-coral-100/50 h-full">
        {isHovered && (
          <div
            className="absolute -z-5 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,107,61,0.04), transparent 70%)`,
              inset: 0,
            }}
          />
        )}
        {children}
      </div>
    </div>
  );
};

export default GlowCard;
