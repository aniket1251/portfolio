import React from 'react'
import { IconType } from 'react-icons';
import TechIcon from './TechIcon';
import { twMerge } from 'tailwind-merge';

const ToolboxItems = ({
    techIcons,
    className,
    itemsWrapperClassName,
}:{
    techIcons:{
        title:string;
        icon:IconType;
    }[];
    className?:string;
    itemsWrapperClassName?:string;
}) => {
  return (
    <div className={twMerge('flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',className)}>
        <div className={twMerge('flex flex-none py-0.5 gap-6 pr-6',itemsWrapperClassName)}>
            {techIcons.map((item, idx)=>(
                <div key={idx} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                    <TechIcon icon={item.icon} label={item.title}/>
                </div>
            ))}
        </div>
    </div>    
  )
}

export default ToolboxItems