import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import FooterLink from "@/components/FooterLink";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiGithub,
  SiLinkedin
 } from "react-icons/si";


const linkData = [
  {
    title:"Github",
    url:"https://github.com/aniket1251",
    icon:SiGithub,
  },
  {
    title:"LinkedIn",
    url:"https://www.linkedin.com/in/aniket1251/",
    icon:SiLinkedin,
  },
  {
    title:"LeetCode",
    url:"https://leetcode.com/u/deCoder1205/",
    icon:SiLeetcode,
  },
  {
    title:"GfG",
    url:"https://www.geeksforgeeks.org/user/ag1276fo/",
    icon:SiGeeksforgeeks,
  }
]

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      {" "}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>{" "}
      <div className="container">
        {" "}
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          {" "}
          <div className="text-white/40">
            &copy; {new Date().getFullYear()}, All Rights Reserved.{" "}
          </div>{" "}
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {linkData.map((data,idx)=>(
              <FooterLink 
                key={idx}
                title={data.title}
                url={data.url}
                icon={data.icon}
              />
            ))}
          </nav>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};
