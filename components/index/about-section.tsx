import React, { FC, useEffect, useRef, useState } from 'react'
import { fadeInFromLeft } from '../../hooks/fades';
import { AboutSection, DandelitonParticleData } from '../../lib/types/data-types';
import Button from '../button';
import Title from '../title';
import DandelitonParticle from './dandelion_particle';
import SectionContainer, { BACKGROUND, FLEX, HEIGHT }  from '../section-container'
import TextBlock from '../text-block';
import Image from 'next/image'


function getRndInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let dandelionCounter = 0;

const AboutSection: FC<{ scrollOne: React.MouseEventHandler<HTMLButtonElement>, scrollTwo: React.MouseEventHandler<HTMLButtonElement>, content: AboutSection }> = ({ scrollOne, scrollTwo, content, children }) => {

  const introRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [dandelions, setDandelions] = useState<DandelitonParticleData[]>([]);

  let dandelionSpawnRatio = 0.7;
  let dandelionDoubleSpawnRation = 1;
  let dandelionClockSpeed = 3000;

  useEffect(() => {

    setInterval(() => {
      if (Math.random() > dandelionSpawnRatio) {
        return false;
      }
      setDandelions((stateArray) => {
        const dandelions: DandelitonParticleData[] = []
        for (let i = 0; i < (Math.random() > dandelionDoubleSpawnRation ? 2 : 1); i++) {
          const animationTimeS: number = getRndInteger(5, 8);
          const newDandelion: DandelitonParticleData = {
            id: ++dandelionCounter,
            xTarget: getRndInteger(600, 800),
            yTarget: getRndInteger(-400, -300),
            rotate: getRndInteger(40, 60),
            offsetX: getRndInteger(50, 100),
            offsetY: getRndInteger(100, 150),
            fadeOutTimeMS: (animationTimeS - 2) * 1000,
            animationtimeS: animationTimeS
          }
          dandelions.push(newDandelion)
        }
        let updatedArray = [...stateArray, ...dandelions];
        if(stateArray.length > 12){
         updatedArray = updatedArray.slice(updatedArray.length / 2, updatedArray.length);
        }
        return updatedArray
      })
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
    <SectionContainer background={BACKGROUND.PRIMARY} flex={FLEX.ROW} height={HEIGHT.MEDIUM}>
      <div ref={introRef} className="lg:w-3/5 flex flex-col  min-w-0 animate-fadeInFromLeft opacity-0  break-words">
        <Title title={content.titleTop} titleClass="font-cursive" subTitle={content.titleBottom} containerClass='mb-24' />
        {content.paragraphs.map((paragraph, i) => {
          return (
            <div key={i} className='mt-4'>
              <TextBlock text={paragraph}/>
            </div>
          )
        })}
        <div className="md:flex-row mt-8">
          <Button outlined={true}
            onClick={scrollTwo}
            title="Tov??bb olvasok"
          />
          <Button outlined={false}
            onClick={scrollOne}
            title="Kapcsolat" />
        </div>
      </div>
      <div className="hidden lg:flex lg:w-2/5 px-2 items-center">
        <Image src={content.image} height={421} width={297} className="" />
        {dandelions.map(dandelion => {
          return (<DandelitonParticle key={dandelion.id} {...dandelion} />)
        })}
      </div>
    </SectionContainer>
  )
}

export default AboutSection
