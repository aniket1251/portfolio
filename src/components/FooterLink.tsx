import React from "react";
import { IconType } from "react-icons";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const FooterLink = ({ icon: Icon, title, url }: { icon: IconType; title: string; url: string }) => {
  return (
    <a
      href={url}
      className="inline-flex items-center gap-1.5 transition-all duration-300 ease-out hover:-translate-y-1 group relative text-warm-800/60 hover:text-warm-900"
      target="_blank"
    >
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-coral-400 to-amber-400 transition-all duration-300 group-hover:w-full" />
      <Icon className="size-4 transition-colors duration-300 group-hover:text-coral-500" />
      <span className="font-semibold">{title}</span>
      <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
};

export default FooterLink;
