import React, { FC, useEffect } from 'react'
import { fadeInFromBottom } from '../../hooks/fades';
import { ContactSection } from '../../lib/types/data-types';
import Image from 'next/image'

import Title from '../title';
import Link from '../link';


const ContactSection: FC<{ selfRef: React.RefObject<HTMLDivElement>, content: ContactSection, showTitle: boolean }> = ({ selfRef, content, showTitle, children }) => {

    useEffect(() => {
        const fadeInFromBottomObserver: IntersectionObserver = new IntersectionObserver(fadeInFromBottom, { threshold: 0 });
        if (selfRef.current != null) {
            fadeInFromBottomObserver.observe(selfRef.current);
        }
    });

    return (
        <div className="container mx-auto px-3 md:px-6 lg:px-48  flex flex-col justify-center items-center py-4 max-w-full bg-primary min-h-[83vh]">
            <div ref={selfRef} className='animate-fadeInFromBottom opacity-0'>
                {showTitle &&
                    <Title title={content.titleTop} />

                }
                <div className="sm:flex flex-wrap justify-between items-center text-center pt-8 gap-8 animate-fadeInFromBottom">
                    {content.contactData.map((data, i) => {
                        return (
                            <div key={i} className="w-full min-w-[16em] sm:w-1/2 md:w-1/3 px-4 py-4 mt-6 bg-secondary shadow-lg rounded-lg m-auto">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-active text-white">
                                        <Image src={data.img} height={26} width={26}
                                            className="block w-full h-full"
                                            alt="..."
                                        />
                                    </div>
                                </div>

                                <p className="text-md  text-gray-600 py-4">
                                    <Link href={data.bodyLink} title={data.body}/>
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