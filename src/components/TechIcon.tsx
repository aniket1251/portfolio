import React from 'react'
import { IconType } from 'react-icons';

interface IconProps{
    icon: IconType;
    label:string;
}

const TechIcon = ({icon:Icon, label}:IconProps) => {
  return (
        <>
            {Icon && <Icon className='size-10'/>}
            <span>{label}</span>
        </>
  )
}

export default TechIcon;