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
]

export const AboutSection = () => {
  return( 
    <div>
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me."
      />
      <div>
        <TechIcon icon={SiReact} label="React"/>
      </div>
    </div>
  );
};
