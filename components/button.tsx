import React, { FC, useEffect, useRef } from 'react'
import { fadeInFromLeft } from '../hooks/fades';
import { AboutSection } from '../lib/types/data-types';


const Button: FC<{ onClick: React.MouseEventHandler, title: string, outlined: boolean, className?:string }> = ({ onClick, title, outlined, className, children }) => {

    if (!outlined) {
        return (
            <button className={className ? className : '' + " transition-all duration-500 uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-active hover:bg-activ text-black text-md"} onClick={onClick}>
                {title}
            </button>
        )
    } else {
        return (
            <button className={className ? className : '' + " transition-all duration-500 uppercase py-2 px-4 rounded-lg bg-interactive border-2 border-transparent text-white text-md mr-4 hover:bg-active"} onClick={onClick}>
                {title}
            </button>
        )
    }
}

export default Button