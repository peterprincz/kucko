import React, { FC, Props } from 'react'


const Wave: FC<{inverse:boolean}> = ({ inverse, children }) => {

    return (
        <div className={(inverse ? "bg-primary" : "bg-secondary") + ' w-full'}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"
                className='relative w-full h-10 min-h-10 max-h-20'
                >
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g>
                    <use className={"animate-waves delay-[-2s] duration-[7s] "  + (inverse ? "fill-primary":"fill-secondary") } xlinkHref="#gentle-wave" x="48" y="0" />
                    <use className={"animate-waves delay-[-5s] duration-[20s] " + (inverse ? "fill-secondary":"fill-primary")} xlinkHref="#gentle-wave" x="48" y="7" />
                </g>
            </svg>
        </div>
    )
}
export default Wave