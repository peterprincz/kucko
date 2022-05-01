import React, { FC, useEffect } from 'react'
import { fadeInFromBottom } from '../../hooks/fades';
import { ContactSection } from '../../lib/types/data-types';
import Image from 'next/image'
import Title from '../title';
import Link from '../link';
import SectionContainer, { BACKGROUND, FLEX, HEIGHT }  from '../section-container'

const ContactSection: FC<{ selfRef: React.RefObject<HTMLDivElement>, content: ContactSection, showTitle: boolean }> = ({ selfRef, content, showTitle, children }) => {

    useEffect(() => {
        const fadeInFromBottomObserver: IntersectionObserver = new IntersectionObserver(fadeInFromBottom, { threshold: 0 });
        if (selfRef.current != null) {
            fadeInFromBottomObserver.observe(selfRef.current);
        }
    });

    return (
        <SectionContainer background={BACKGROUND.PRIMARY} flex={FLEX.COLUMN} height={HEIGHT.MEDIUM}>
            <div ref={selfRef} className='animate-fadeInFromBottom opacity-0'>
                {showTitle &&
                    <Title title={content.titleTop} />

                }
                <div className="sm:flex flex-wrap w-100 md:w-8/12 md:m-auto justify-between items-center text-center pt-8 gap-8 animate-fadeInFromBottom">
                    {content.contactData.map((data, i) => {
                        return (
                            <div key={i} className="w-full min-w-[16em]  m-auto md:w-1/3 p-8 mt-6 bg-secondary shadow-lg rounded-lg">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-active text-white">
                                        <Image src={data.img} height={26} width={26}
                                            className="block w-full h-full"
                                            alt="..."
                                        />
                                    </div>
                                </div>

                                <p className="text-md  text-gray-600 py-4">
                                    <Link target="_blank" href={data.bodyLink} title={data.body}/>
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </SectionContainer>
    )
}

export default ContactSection;