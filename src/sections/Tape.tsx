"use client";

import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";

const words = [
  "Performant", "Accessible", "Secure", "Interactive", "Scalable",
  "User Friendly", "Responsive", "Maintainable", "Reliable", "Clean Code",
];

export const TapeSection = () => {
  return (
    <div className="py-8 lg:py-10 overflow-x-clip">
      <AnimatedSection>
        <div className="bg-gradient-to-r from-coral-400 to-amber-400 -rotate-3 -mx-1 shadow-lg shadow-coral-200/20">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:120s]">
              {[...new Array(16)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {words.map((word, wIdx) => (
                    <div key={wIdx} className="inline-flex gap-4 items-center">
                      <span className="text-white uppercase font-extrabold text-sm">{word}</span>
                      <StarIcon className="size-6 text-white/80 -rotate-12" />
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="bg-gradient-to-r from-amber-400 to-coral-400 rotate-3 -mx-1 mt-4 shadow-lg shadow-amber-200/20">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex flex-none gap-4 pr-4 py-3 animate-move-right [animation-duration:120s]">
              {[...new Array(16)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {words.map((word, wIdx) => (
                    <div key={wIdx} className="inline-flex gap-4 items-center">
                      <span className="text-white uppercase font-extrabold text-sm">{word}</span>
                      <StarIcon className="size-6 text-white/80 -rotate-12" />
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};
