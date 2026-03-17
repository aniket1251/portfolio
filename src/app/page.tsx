"use client";

import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { ExperiencesSection } from "@/sections/Experiences";
import { PageLoader } from "@/components/PageLoader";
import { ScrollProgress } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div>
      <CustomCursor />
      <PageLoader />
      <ScrollProgress />
      <Header />
      <HeroSection />
      <ExperiencesSection />
      <TapeSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
