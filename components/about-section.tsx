import React, { FC, useEffect, useRef } from 'react'
import { fadeInFromLeft } from '../hooks/fades';


const AboutSection: FC<{ scrollOne: React.MouseEventHandler<HTMLButtonElement>, scrollTwo: React.MouseEventHandler<HTMLButtonElement> }> = ({ scrollOne, scrollTwo, children }) => {

  const introRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const sectionParagraphStyle = "text-left text-gray-700 mb-4";
  const sectionContentStyle = "sm:w-1/3 md:w-2/5 lg:w-3/5 flex flex-col";
  const sectionImageStyle = "hidden sm:block sm:w-2/3 md:w-3/5 lg:w-2/5 px-2";

  useEffect(() => {
    const fadeInFromLeftObserver: IntersectionObserver = new IntersectionObserver(fadeInFromLeft);
      if (introRef.current != null) {
        fadeInFromLeftObserver.observe(introRef.current);
      }
  });

  return (
    <div className="container mx-auto px-3 md:px-6 lg:px-48 py:3 md:py-6 lg:py-20 flex py-16 max-w-full bg-slate-300 min-h-screen">

      <div ref={introRef} className={sectionContentStyle + " animate-fadeInFromLeft"}>
        <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
        </span>
        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
          Miben tudok
          <span className="text-5xl sm:text-7xl">
            segíteni?
          </span>
        </h1>
        <p className={sectionParagraphStyle}>
          Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
        </p>
        <p className={sectionParagraphStyle}>
          Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
        </p>
        <p className={sectionParagraphStyle}>
          Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
        </p>
        <div className="flex mt-8">
          <button className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400" onClick={scrollOne}>
            Kapcsolat
          </button>
          <button className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md" onClick={scrollTwo}>
            Tovább olvasok
          </button>
        </div>
      </div>
      <div className={sectionImageStyle}>
        <img src="https://static.wixstatic.com/media/aab78a_b854a766f50242a695e45a5585c23fc3~mv2.jpg/v1/fill/w_319,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/image0_edited.jpg" className="ml-auto" />
      </div>
    </div>

  )
}

export default AboutSection
