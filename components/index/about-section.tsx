import React, { FC, useEffect, useRef, useState } from 'react'
import { fadeInFromLeft } from '../../hooks/fades';
import { AboutSection, Dandelion } from '../../lib/types/data-types';
import Button from '../button';
import Title from '../title';
import DandelitonParticle from './dandelion_particle';

function getRndInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function xsaasd(min: number, max: number): number {
  return 51505;
}


let dandelionCounter = 0;

const AboutSection: FC<{ scrollOne: React.MouseEventHandler<HTMLButtonElement>, scrollTwo: React.MouseEventHandler<HTMLButtonElement>, content: AboutSection }> = ({ scrollOne, scrollTwo, content, children }) => {

  const introRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [dandelions, setDandelions] = useState<Dandelion[]>([]);
  const dandelionRef: React.RefObject<HTMLImageElement> = useRef<HTMLImageElement>(null);

  let dandelionSpawnRatio = 0.4;
  let dandelionClockSpeed = 2000;

  useEffect(() => {

    setInterval(() => {

      /*--- Implementation here begins--- */
      if (Math.random() < dandelionSpawnRatio) {
        return false;
      }
      setDandelions((stateArray) => {
        const dandelions: Dandelion[] = []
        for (let i = 0; i < getRndInteger(1, 2); i++) {
          const newDandelion: Dandelion = {
            id: ++dandelionCounter,
            xTarget: getRndInteger(300, 400),
            yTarget: getRndInteger(-400, -300),
            rotate: getRndInteger(40, 360),
            offsetX: getRndInteger(100, 200),
            offsetY: getRndInteger(100, 200),
            fadeOutTimeMS: getRndInteger(5000, 7000),
            animationtimeS: getRndInteger(6, 9)
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
    <div className="container px-3 md:px-6 lg:px-24 py:3 md:py-6 lg:py-20 flex py-20 max-w-full bg-primary min-h-[90vh]">
      <div ref={introRef} className="lg:w-3/5 flex flex-col  min-w-0 animate-fadeInFromLeft opacity-0 mr-6 break-words">
        <Title title={content.titleTop} titleClass="font-cursive" subTitle={content.titleBottom} containerClass='mb-24' />
        {content.paragraphs.map((paragraph, i) => {
          return (
            <p className="text-left text-gray-800 mb-4" key={i}>
              {paragraph}
            </p>
          )
        })}
        <div className="md:flex-row mt-8">
          <Button outlined={true}
            onClick={scrollTwo}
            title="Tovább olvasok"
            />
          <Button outlined={false}
            onClick={scrollOne}
            title="Kapcsolat" />
        </div>
      </div>
      <div className="hidden lg:flex lg:w-2/5 px-2 items-center">
        <img src={content.image} ref={dandelionRef} className="" />

        {dandelions.map(dandelion => {
          return (<DandelitonParticle key={dandelion.id} {...dandelion} />)
        })}


      </div>
    </div>

  )
}

export default AboutSection
