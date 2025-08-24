import React from 'react'
import { IconType } from 'react-icons'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

interface linkProp{
    icon:IconType;
    title:string;
    url:string;
}

const FooterLink = ({
    icon:Icon,
    title,
    url,
}:linkProp) => {
  return (
    <>
            <a
                href={url}
                className="inline-flex items-center gap-1.5 transition-all duration-300 ease-out hover:-translate-y-0.5 group"
            >
                <span><Icon className="size-4" /></span>
                <span className="font-semibold">{title}</span>
                <span><ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
            </a>
    </>
  )
}

export default FooterLink