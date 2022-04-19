import React, { FC, useEffect, useRef, useState } from 'react'
import { fadeInFromLeft } from '../hooks/fades';
import { AboutSection, Dandelion } from '../lib/types/data-types';
import DandelitonParticle from './dandelion_particle';

function getRndInteger(min:number, max:number):number {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function xsaasd(min:number, max:number):number {
  return 51505;
}


let dandelionCounter = 0;

const AboutSection: FC<{ scrollOne: React.MouseEventHandler<HTMLButtonElement>, scrollTwo: React.MouseEventHandler<HTMLButtonElement>, content: AboutSection }> = ({ scrollOne, scrollTwo, content, children }) => {

  const introRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const sectionParagraphStyle = "text-left text-gray-800 mb-4";
  const sectionContentStyle = "lg:w-3/5 flex flex-col";
  const sectionImageStyle = "hidden lg:flex lg:w-2/5 px-2 items-center";

  const [dandelions, setDandelions] = useState<Dandelion[]>([]);
  const dandelionRef: React.RefObject<HTMLImageElement> = useRef<HTMLImageElement>(null);

  let dandelionSpawnRatio = 0.4;
  let dandelionClockSpeed = 2000;

  useEffect(() => {


    


    setInterval(() => {
      
      /*--- Implementation here begins--- */
      if(Math.random() < dandelionSpawnRatio){
        return false;
      }
      setDandelions((stateArray) => {
        const dandelions:Dandelion[] = []
        for (let i = 0; i < getRndInteger(1, 2); i++) {
          const newDandelion:Dandelion = {
            id:++dandelionCounter,
            xTarget: getRndInteger(300, 400),
            yTarget: getRndInteger(-400, -300),
            rotate: getRndInteger(40, 360),
            offsetX: getRndInteger(100, 200),
            offsetY:  getRndInteger(100, 200),
            fadeOutTimeMS: getRndInteger(5000, 7000),
            animationtimeS: getRndInteger(6,9)
          }
          dandelions.push(newDandelion)
        }
        //Original array + new Array
        const updatedArray = [...stateArray, ...dandelions];
        return updatedArray
      })
      /*--- Implementation here ends--- */
    }, 
    
    
    dandelionClockSpeed)






    
  }, []);

  useEffect(() => {
    const fadeInFromLeftObserver: IntersectionObserver = new IntersectionObserver(fadeInFromLeft);
    if (introRef.current != null) {
      fadeInFromLeftObserver.observe(introRef.current);
    }
  });

  return (
    <div className="container mx-auto px-3 md:px-6 lg:px-24 py:3 md:py-6 lg:py-20 flex py-20 max-w-full bg-primary min-h-[90vh]">
      <div ref={introRef} className={sectionContentStyle + " animate-fadeInFromLeft opacity-0 mr-6"}>
        <h1 className="font-cursive uppercase text-big mb-12 md:text-6l font-black flex flex-col leading-none text-gray-800">
          {content.titleTop}
          <span className="text-big sm:text-huge">
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

          <button className={"transition-colors duration-500 min-w-[12rem] py-2 px-4 rounded-lg bg-secondary border-2 border-transparent  mr-4 hover:border-primary"}
            onClick={scrollTwo}>
            Tovább olvasok
          </button>

          <button
            className={"transition-all duration-500 min-w-[12rem] py-2 px-4 rounded-lg bg-transparent border-2 border-active hover:bg-active "}
            onClick={scrollOne}>
            Kapcsolat
          </button>
        </div>
      </div>
      <div className={sectionImageStyle}>
        <img src={content.image} ref={dandelionRef} className="" />

        {dandelions.map(dandelion => {
          return (<DandelitonParticle key={dandelion.id} {...dandelion} />)
        })}


      </div>
    </div>

  )
}

export default AboutSection
