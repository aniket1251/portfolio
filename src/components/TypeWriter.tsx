"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const TypeWriter = ({
  words,
  className = "",
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseTime = 2000,
}: {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const word = words[currentWord];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === word) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWord((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setCurrentText(
            isDeleting
              ? word.substring(0, currentText.length - 1)
              : word.substring(0, currentText.length + 1)
          );
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWord, words, isInView, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span ref={ref} className={className}>
      {currentText}
      <motion.span
        className="inline-block w-[2px] h-[1em] bg-coral-400 ml-0.5 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
};
