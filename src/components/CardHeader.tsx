import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-2 group">
        <StarIcon className="size-9 text-coral-400 transition-transform duration-500 group-hover:rotate-45" />
        <h3 className="font-serif text-3xl text-warm-900">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-warm-800/50 mt-2">{description}</p>
    </div>
  );
};

export default CardHeader;
