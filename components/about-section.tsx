import React, { FC, useEffect, useRef } from 'react'
import { fadeInFromLeft } from '../hooks/fades';
import { AboutSection } from '../lib/types/data-types';
import Button from './button';


const AboutSection: FC<{ scrollOne: React.MouseEventHandler<HTMLButtonElement>, scrollTwo: React.MouseEventHandler<HTMLButtonElement>, content: AboutSection }> = ({ scrollOne, scrollTwo, content, children }) => {

  const introRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const sectionParagraphStyle = "text-left text-gray-700 mb-4";
  const sectionContentStyle = "lg:w-3/5 flex flex-col";
  const sectionImageStyle = "hidden lg:flex lg:w-2/5 px-2 items-center";

  useEffect(() => {
    const fadeInFromLeftObserver: IntersectionObserver = new IntersectionObserver(fadeInFromLeft);
    if (introRef.current != null) {
      fadeInFromLeftObserver.observe(introRef.current);
    }
  });

  return (
    <div className="container mx-auto px-3 md:px-6 lg:px-24 py:3 md:py-6 lg:py-20 flex py-16 max-w-full bg-primary min-h-[83vh]">
      <div ref={introRef} className={sectionContentStyle + " animate-fadeInFromLeft opacity-0 mr-6"}>

        <h1 className="font-bebas-neue uppercase text-6xl mb-12 lg:mb-0 md:text-6l font-black flex flex-col leading-none text-gray-800">
          {content.titleTop}
          <span className="text-5xl sm:text-7xl">
            {content.titleBottom}
          </span>
        </h1>
        {content.paragraphs.map((paragraph, i) => {
          return (
            <p className={sectionParagraphStyle} key={i}>
              {paragraph}
            </p>
          )
        })}
        <div className="flex mt-8">
          <Button title='Tovább olvasok' outlined={true} onClick={scrollTwo}/>
          <Button title='Kapcsolat' outlined={false} onClick={scrollOne}/>
        </div>
      </div>
      <div className={sectionImageStyle}>
        <img src={content.image} className="ml-auto" />
      </div>
    </div>

  )
}

export default AboutSection
