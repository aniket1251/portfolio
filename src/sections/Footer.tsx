import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiGithub,
  SiLinkedin
 } from "react-icons/si";

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
              <a
                href="https://github.com/aniket1251"
                className="inline-flex items-center gap-1.5 transition-all duration-300 ease-out hover:-translate-y-0.5 group"
              >
                {" "}
                <span><SiGithub className="size-4" /></span>{" "}
                <span className="font-semibold">Github</span>{" "}
                <span><ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/aniket1251/"
                className="inline-flex items-center gap-1.5 transition-all duration-300 ease-out hover:-translate-y-0.5 group"
              >
                {" "}
                <span><SiLinkedin className="size-4" /></span>{" "}
                <span className="font-semibold">LinkedIn</span>{" "}
                <span><ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>{" "}
              </a>
              <a
                href="https://leetcode.com/u/deCoder1205/"
                className="inline-flex items-center gap-1.5 transition-all duration-300 ease-out hover:-translate-y-0.5 group"
              >
                {" "}
                <span><SiLeetcode className="size-4" /></span>{" "}
                <span className="font-semibold">LeetCode</span>{" "}
                <span><ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>{" "}
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/ag1276fo/"
                target="_blank"
                className="inline-flex items-center gap-1.5 transition-all duration-300 ease-out hover:-translate-y-0.5 group"
              >
                {" "}
                <span><SiGeeksforgeeks className="size-4" /></span>{" "}
                <span className="font-semibold">GfG</span>{" "}
                <span><ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>{" "}
              </a>
          </nav>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};
