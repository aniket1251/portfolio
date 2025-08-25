import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { GoDownload } from "react-icons/go";
import { track } from "@vercel/analytics";


export const HeroSection = () => {
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
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 10;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
  return (
    <div id='home' className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
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
        <HeroOrbit size={430} rotate={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={440} rotate={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={520} rotate={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={530} rotate={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={550} rotate={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={590} rotate={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={650} rotate={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={710} rotate={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={720} rotate={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={800} rotate={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300"/>
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
            <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div>Available for new projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Intelligent Web Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg" >
            Hi, I&apos;m Aniket — a passionate full-stack developer who builds applications that are fast, scalable, and delightful. Let&apos;s connect and build something amazing together!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button 
            onClick={() => handleScroll("projects")}
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-20 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-lg">
            <span className="font-semibold">Explore my work</span>
            <ArrowDown className="size-4"/>
          </button>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl z-20  transition-all duration-300 hover:bg-white/70 hover:scale-105 active:scale-95 shadow-sm hover:shadow-lg">
            <span>
              <GoDownload size="20px"/>
            </span>
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </div>
  );
};
