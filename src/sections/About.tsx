import SectionHeader from "@/components/SectionHeader";
import { TbBrandCpp } from "react-icons/tb";
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
          SiRedux
        } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import TechIcon from "@/components/TechIcon";
import StarIcon from '@/assets/icons/star.svg';
import Card from "@/components/Card";
import Image from "next/image";
import bookImage from "@/assets/images/TAGR.png";
import mapImage from "@/assets/images/chandausi.png";
import smileImage from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";


const techIcons = [
  {
    title:"C++",
    icon:TbBrandCpp,
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
    title:"HTML5",
    icon:SiHtml5,
  },
  {
    title:"CSS3",
    icon:SiCss3,
  },
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
    title:"Mongoose",
    icon:SiMongoose,
  },
  {
    title:"AWS",
    icon:FaAws,
  },
  {
    title:"Postgresql",
    icon:BiLogoPostgresql,
  },
  {
    title:"MySql",
    icon:TbBrandMysql,
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

const hobbies =[
  {
    title:"Sports",
    emoji:"🏏",
  },
  {
    title:"Cinephile",
    emoji:"🎬",
  },
  {
    title:"Traveling",
    emoji:"🌍",
  },
  {
    title:"Reading",
    emoji:"📚",
  },
  {
    title:"Music",
    emoji:"🎶",
  },
  {
    title:"Fitness",
    emoji:"💪",
  },
  {
    title:"Photography",
    emoji:"📸",
  },
]

export const AboutSection = () => {
  return(
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader title="My Reads" description="Explore the books shaping my perspectives."/>
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="book"/>
            </div>
          </Card>
          <Card>
            <div>
              <StarIcon/>
              <h3>My Toolbox</h3>
              <p>Explore the technologies and tools I use to craft exceptional digital experiences.</p>
            </div>
            <div>
              {techIcons.map((item, idx)=>(
                <div key={idx}>
                  <TechIcon icon={item.icon} label={item.title}/>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div>
              <StarIcon/>
              <h3>Beyond the code</h3>
              <p>Explore the books shaping my perspectives.</p>
            </div>
            <div>
              {hobbies.map((hobby,idx)=>(
                <div key={idx}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div>
              <Image src={mapImage} alt="map"/>
              <Image src={smileImage} alt="face-emoji"/>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
