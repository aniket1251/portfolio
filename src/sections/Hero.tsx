import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
        >
        </div>
        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>
        <HeroOrbit size={800} rotate={-72}>
          <StarIcon className="size-28 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={550} rotate={20}>
          <StarIcon className="size-12 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={590} rotate={98}>
          <StarIcon className="size-8 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={430} rotate={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={440} rotate={79}>
          <SparkleIcon className="size-5 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={530} rotate={178}>
          <SparkleIcon className="size-10 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={710} rotate={144}>
          <SparkleIcon className="size-14 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={720} rotate={85}>
          <div className="size-3 rounded-full bg-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={520} rotate={-41}>
          <div className="size-2 rounded-full bg-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={650} rotate={-5}>
          <div className="size-2 rounded-full bg-emerald-300/20"/>
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center ">
          <Image
            src={memojiImage}
            alt="person peeking from behind laptop"
            className="size-[100px]"
          />
          <div className="bg-gray-900 border border-gray-800 px-4 py-1.5 inline-flex items-center rounded-lg gap-4">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div>Available for new projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Intelligent Web Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg" >
            A passionate full-stack developer who enjoys building applications that are fast, scalable, and delightful to use. Let’s connect and build something amazing together!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my work</span>
            <ArrowDown className="size-4"/>
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👋</span>
            <span>{`Let's Connect`}</span>
          </button>
        </div>
      </div>
      
    </div>
  );
};
