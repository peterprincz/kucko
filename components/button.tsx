import React, { FC, useEffect, useRef } from 'react'
import { fadeInFromLeft } from '../hooks/fades';
import { AboutSection } from '../lib/types/data-types';


const Button: FC<{ onClick: React.MouseEventHandler, title: string, outlined: boolean, className?:string }> = ({ onClick, title, outlined, className, children }) => {

    if (!outlined) {
        return (
            <button className={className ? className : '' 
            + " transition-all duration-500 min-w-[12rem] py-2 px-4 rounded-lg bg-transparent border-2 border-active hover:bg-active "} onClick={onClick}>
                {title}
            </button>
        )
    } else {
        return (
            <button className={className ? className : '' 
            + " transition-colors duration-500 min-w-[12rem] py-2 px-4 rounded-lg bg-secondary border-2 border-transparent  mr-4 hover:border-primary"} onClick={onClick}>
                {title}
            </button>
        )
    }
}

export default Button