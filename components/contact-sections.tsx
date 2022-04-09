import React, { FC, useEffect } from 'react'
import { fadeInFromBottom } from '../hooks/fades';
import { ContactSection } from '../lib/types/data-types';


const ContactSection: FC<{ selfRef: React.RefObject<HTMLDivElement>, content: ContactSection }> = ({ selfRef, content, children }) => {

    useEffect(() => {
        const fadeInFromBottomObserver: IntersectionObserver = new IntersectionObserver(fadeInFromBottom, {threshold: 0});
        if (selfRef.current != null) {
            fadeInFromBottomObserver.observe(selfRef.current);
        }
    });

    return (
        <div className="container mx-auto px-3 md:px-6 lg:px-48 py:3 py-6 lg:py-20 flex flex-col justify-center items-center dpy-16 max-w-full bg-blue-200 min-h-screen">
            <div ref={selfRef} className='animate-fadeInFromBottom opacity-0'>
                <h1 className="self-baseline font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800">
                        {content.titleTop}
                    <span className="text-5xl sm:text-7xl">
                        {content.titleBottom}
                    </span>
                </h1>
                <div className="sm:flex flex-wrap justify-between items-center text-center gap-8 animate-fadeInFromBottom">
                    {content.contactData.map((data, i) => {
                        return(
                        <div key={i} className="w-full min-w-[16em] sm:w-1/2 md:w-1/3 px-4 py-4 mt-6 bg-white shadow-lg rounded-lg m-auto">
                            <div className="flex-shrink-0">
                                <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    <svg width="20" height="20" fill="currentColor" className="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold py-4">
                                {data.title}
                            </h3>
                            <p className="text-md  text-gray-500 py-4">
                                {data.body}
                            </p>
                        </div>
                        )
                    })}
                </div>
            </div>

        </div>

    )
}

export default ContactSection;