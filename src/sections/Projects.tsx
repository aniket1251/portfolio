import amazoneImage from "@/assets/images/amazon.png";
import acadTracxImage from "@/assets/images/acad.png";
import keeperImage from "@/assets/images/keeper.png";
import yoloImage from "@/assets/images/yolo.png";
import Image from "next/image";
// import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2024",
    title: "DistilledFloatNet",
    results: [
      { title: "• Real-time detection with GroundedSAM and YOLOv8" },
      { title: "• Annotation accelerated 70% with GroundedSAM" },
      { title: "• Edge optimized with Knowledge Distillation with 74.1 mAP50 & 78.74 FPS" },
    ],
    link: "https://github.com/aniket1251/DistilledFloatNet",
    image: yoloImage,
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "AcademiTrackX",
    results: [
      { title: "• CRUD and auth with 40% efficiency" },
      { title: "• File handling with 35% faster speed" },
      { title: "• Security with 30% stronger protection" }
],
    link: "https://github.com/aniket1251/AcademiTrackX",
    image: acadTracxImage,
  },
    {
    company: "Personal Project",
    year: "2022",
    title: "Amazone: Amazon Clone",
    results: [
      { title: "• E-commerce flow with 100+ transactions" },
      { title: "• Redux state management with 35% fewer errors" },
      { title: "• Responsive UI by 40% better mobile" },
    ],
    link: "https://amazone-web.netlify.app",
    image: amazoneImage,
  },
  {
    company: "Personal Project",
    year: "2022",
    title: "Keeper",
    results: [
      { title: "• React note-taking app with 100+ notes/day" },
      { title: "• Create and delete notes 30% faster" },
      { title: "• Front-end optimized for 90% load speed" }
],
    link: "https://adoring-stonebraker-0f304d.netlify.app/",
    image: keeperImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="WHAT I&apos;VE BUILT"
          eyebrow="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, idx)=>(
          <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:py-20 sticky"
              style={{
                top: `calc(64px + ${idx * 40}px`
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage:`url{${grainImage.src}}`
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result, idx)=>(
                  <li
                  className="flex gap-2 text-sm md:text-base text-white/50"
                  key={idx}
                  >
                    {/* <CheckCircleIcon className="size-5 md:size-6"/> */}
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link} target="_blank">
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 transition-all duration-300 hover:bg-white/70 hover:scale-105 active:scale-95 shadow-sm hover:shadow-lg">
                  <span>Visit Project</span>
                  <ArrowUpRightIcon className="size-4"/>
                </button>
              </a>
              </div>
              <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
              />
              </div>
            </div>
          </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
