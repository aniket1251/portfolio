import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import LeetCodeIcon from "@/assets/icons/leetcode.svg";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const footerLinks = [
{
    title: "Github",
    link: "https://github.com/aniket1251",
    icon:faGithub,
},
{
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/aniket1251/",
    icon: faLinkedin,
},
{
    title: "LeetCode",
    link: "https://leetcode.com/u/deCoder1205/",
    icon: LeetCodeIcon
},
{
    title: "GfG",
    link: "https://www.geeksforgeeks.org/user/ag1276fo/",
    // icon:,
},
];

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
            {" "}
            {footerLinks.slice(0,2).map((link, idx) => (
              <a
                href={link.link}
                key={idx}
                className="inline-flex items-center gap-1.5"
              >
                {" "}
                <span><FontAwesomeIcon icon={link.icon} className="size-4" /></span>{" "}
                <span className="font-semibold">{link.title}</span>{" "}
                <span><ArrowUpRightIcon className="size-4" /></span>{" "}
              </a>
            ))}
              <a
                href="https://leetcode.com/u/deCoder1205/"
                className="inline-flex items-center gap-1.5"
              >
                {" "}
                <span><SiLeetcode className="size-4" /></span>{" "}
                <span className="font-semibold">LeetCode</span>{" "}
                <span><ArrowUpRightIcon className="size-4" /></span>{" "}
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/ag1276fo/"
                className="inline-flex items-center gap-1.5"
              >
                {" "}
                <span><SiGeeksforgeeks className="size-4" /></span>{" "}
                <span className="font-semibold">GfG</span>{" "}
                <span><ArrowUpRightIcon className="size-4" /></span>{" "}
              </a>
          </nav>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};
