import React, { Fragment } from "react";
import { IconType } from "react-icons";
import TechIcon from "./TechIcon";
import { twMerge } from "tailwind-merge";

const ToolboxItems = ({
  techIcons,
  className,
  itemsWrapperClassName,
}: {
  techIcons: { title: string; icon: IconType; color?: string }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group/toolbox", className)}>
      <div className={twMerge("flex flex-none py-0.5 gap-3 md:gap-6 pr-3 md:pr-6 group-hover/toolbox:[animation-play-state:paused]", itemsWrapperClassName)}>
        {[...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {techIcons.map((item, itemIdx) => (
              <div key={itemIdx} className="inline-flex items-center gap-2 md:gap-3 py-1.5 md:py-2 px-2 md:px-3 outline outline-1 md:outline-2 outline-warm-200/80 rounded-lg transition-all duration-300 hover:outline-coral-200 hover:bg-coral-50/30">
                <TechIcon icon={item.icon} label={item.title} color={item.color} />
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
