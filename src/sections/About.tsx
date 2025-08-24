import SectionHeader from "@/components/SectionHeader";
import { SiTypescript,
          SiExpress,
          SiJquery,
          SiMongodb,
          SiMongoose,
          SiPostman,
          SiHtml5,
          SiReact,
          SiPython,
          SiNodedotjs,
          SiGit,
          SiBootstrap,
          SiCss3,
          SiGithub,
          SiJavascript,
          SiDocker,
          SiRedux,
          SiTailwindcss
        } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import Card from "@/components/Card";
import Image from "next/image";
import bookImage from "@/assets/images/TAGR.png";
import mapImage from "@/assets/images/chandausi.png";
import smileImage from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { PiFileCppFill } from "react-icons/pi";
import { PiFileSqlFill } from "react-icons/pi";


const techIcons1 = [
  {
    title:"C++",
    icon:PiFileCppFill,
  },
  {
    title:"JavaScript",
    icon:SiJavascript,
  },
  {
    title:"TypeScript",
    icon:SiTypescript,
  },
  {
    title:"Python",
    icon:SiPython,
  },
  {
    title:"Sql",
    icon:PiFileSqlFill,
  },
    {
    title:"Postgresql",
    icon:BiLogoPostgresql,
  },
    {
    title:"AWS",
    icon:FaAws,
  },
  {
    title:"Git",
    icon:SiGit,
  },
  {
    title:"Github",
    icon:SiGithub,
  },
  {
    title:"Docker",
    icon:SiDocker,
  },
  {
    title:"Postman",
    icon:SiPostman,
  },
  {
    title:"VS Code",
    icon:VscVscode,
  },
];

const techIcons2 = [
  {
    title:"ReactJS",
    icon:SiReact,
  },
  {
    title:"NextJs",
    icon:RiNextjsFill,
  },
  {
    title:"Redux",
    icon: SiRedux,
  },
  {
    title:"NodeJs",
    icon:SiNodedotjs,
  },
  {
    title:"Express",
    icon:SiExpress,
  },
  {
    title:"Mongodb",
    icon:SiMongodb,
  },
    {
    title:"HTML5",
    icon:SiHtml5,
  },
  {
    title:"CSS3",
    icon:SiCss3,
  },
  {
    title:"TailwindCSS",
    icon:SiTailwindcss,
  },
  {
    title:"Bootstrap",
    icon:SiBootstrap,
  },
  {
    title:"JQuery",
    icon:SiJquery,
  },
  {
    title:"Mongoose",
    icon:SiMongoose,
  },
]


const hobbies =[
  {
    title:"Traveling",
    emoji:"🌍",
    left:"5%",
    top:"5%",
  },
  {
    title:"Cinephile",
    emoji:"🎬",
    left:"50%",
    top:"5%",
  },
  {
    title:"Sports",
    emoji:"🏏",
    left:"35%",
    top:"40%",
  },
  {
    title:"Reading",
    emoji:"📚",
    left:"10%",
    top:"35%",
  },
  {
    title:"Music",
    emoji:"🎶",
    left:"70%",
    top:"45%",
  },
  {
    title:"Fitness",
    emoji:"💪",
    left:"5%",
    top:"65%",
  },
  {
    title:"Photography",
    emoji:"📸",
    left:"45%",
    top:"70%",
  },
]

export const AboutSection = () => {
  return(
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader title="My Reads" description="Explore the books shaping my perspectives."
            />
            <div className="w-40 mx-auto mt-0">
              <Image src={bookImage} alt="book" className="-mt-2 md:-mt-4 lg:-mt-6"/>
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences."
            className=""
            />
            <ToolboxItems techIcons={techIcons1} className=""/>
            <ToolboxItems techIcons={techIcons2} className="mt-6"/>
          </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader title="Beyond the code" description="Explore the books shaping my perspectives." className="px-6 py-6"
            />
            <div className="relative flex-1">
              {hobbies.map((hobby,idx)=>(
                <div key={idx} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                  left:hobby.left,
                  top:hobby.top,
                }}>
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={mapImage} alt="map" className="h-full w-full object-cover"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <Image src={smileImage} alt="face-emoji" className="size-10"/>
            </div>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
