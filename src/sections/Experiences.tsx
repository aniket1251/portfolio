import grainImage from "@/assets/images/grain.jpg";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

const experiences = [
  {
    name: "Kalam Solutions",
    start: "May 2024",
    end: "July 2024",
    position: "Software Developer Intern",
    type: "Remote",
    descriptions: [
      {
        point:
          "Designed and delivered 5+ backend API features using Node.js and Express, improving average response time by 20-25%",
      },
      {
        point:
          "Integrated 10+ REST endpoints with frontend systems, supporting 300+ active users in production.",
      },
      {
        point:
          "Improved system stability via API testing, debugging, and code reviews, reducing recurring production issues.",
      },
    ],
  },
  {
    name: "CoachBudy",
    start: "March 2022",
    end: "July 2022",
    position: "Full-Stack Developer Intern",
    type: "Remote",
    descriptions: [
      {
        point:
          "Built responsive landing pages and student dashboards using React and Tailwind CSS, improving cross-device engagement across learning workflows.",
      },
      {
        point:
          "Developed and integrated 15+ RESTful APIs to support student, coaching, and admin modules, enabling seamless data flow and feature personalization.",
      },
      {
        point:
          "Implemented role-based authentication and authorization for admin, coaching, and student portals, reducing access-related issues by 30%.",
      },
    ],
  },
];

export const ExperiencesSection = () => {
  return (
    <section id="experiences" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Real-World Results"
          eyebrow="Experiences"
          description="A glimpse into the roles and projects that shaped my professional journey."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {experiences.map((experience, idx) => (
            <Card
              key={idx}
              className="px-8 pt-8 pb-8 md:pt-12 md:px-10 lg:pt-16 lg:py-20 sticky"
              style={{
                top: `calc(64px + ${idx * 40}px`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url{${grainImage.src}}`,
                }}
              ></div>
              <div className="">
                {" "}
                {/*here was the grid part to partion the card in two parts in large screens */}
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{experience.name}</span>
                    <span>&bull;</span>
                    <span>({experience.type})</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                      {experience.position}
                    </h3>
                    <div className="flex  justify-end">
                      <span>({experience.start}</span>
                      <span>-</span>
                      <span>{experience.end})</span>
                    </div>
                  </div>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {experience.descriptions.map((description, idx) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={idx}
                      >
                        <span>&bull;</span>
                        <span>{description.point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
