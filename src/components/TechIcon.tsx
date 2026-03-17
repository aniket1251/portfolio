import React from "react";
import { IconType } from "react-icons";

const TechIcon = ({ icon: Icon, label, color }: { icon: IconType; label: string; color?: string }) => {
  return (
    <>
      {Icon && <Icon className="size-5 md:size-7" style={color ? { color } : undefined} />}
      <span className="font-medium text-warm-800 text-[11px] md:text-sm whitespace-nowrap">{label}</span>
    </>
  );
};

export default TechIcon;
