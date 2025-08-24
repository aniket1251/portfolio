import React from 'react'
import { IconType } from 'react-icons';

interface IconProps{
    icon: IconType;
    label:string;
}

const TechIcon = ({icon:Icon, label}:IconProps) => {
  return (
        <>
            {Icon && <Icon className='size-10 fill-[url(#tech-icon-gradient)]'/>}
            <span className='font-semibold'>{label}</span>
            <svg className='size-0 absolute'>
                <linearGradient id='tech-icon-gradient'>
                    <stop offset="0%" stopColor='rgb(110 231 183)'/>
                    <stop offset="100%" stopColor='rgb(56 189 248)'/>
                </linearGradient>
            </svg>
        </>
  )
}

export default TechIcon;