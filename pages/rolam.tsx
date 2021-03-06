import type { GetStaticProps, NextPage } from 'next'
import React, { useEffect, useRef, useState } from 'react'
import Carousel from '../components/carousel'
import Layout from '../components/layout/layout'
import { AboutData } from '../lib/types/data-types'
import { fadeInFromLeft } from '../hooks/fades';
import ListItem from '../components/list-item'
import Title from '../components/title'
import SectionContainer, { BACKGROUND, FLEX, HEIGHT } from '../components/section-container';
import TextBlock from '../components/text-block'
import Image from 'next/image'
import driveFileHandler from '../lib/drive-reader'


export const getStaticProps: GetStaticProps = async (context) => {

  const aboutData = await driveFileHandler.getAboutData();
  return {
    props: aboutData,
    revalidate: 180
  }
}

const About: NextPage<AboutData> = (aboutContent: AboutData) => {

  const competencyRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [dropDownOpen, setDropDownOpen] = useState(false)

  const toogleDropDown = () => {
    console.log(dropDownOpen)
    if (dropDownOpen) {
      setDropDownOpen(false)
    } else {
      setDropDownOpen(true)
      setTimeout(() => {
        if (competencyRef.current != null) {
          const y = competencyRef.current.getBoundingClientRect().top + window.pageYOffset + -70;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 400);
    }
  }

  const aboutContainer: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const workContainer: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fadeInFromLeftObserver: IntersectionObserver = new IntersectionObserver(fadeInFromLeft);
    if (aboutContainer.current != null) {
      fadeInFromLeftObserver.observe(aboutContainer.current);
    }
    if (workContainer.current != null) {
      fadeInFromLeftObserver.observe(workContainer.current);
    }
  });

  return (
    <Layout title='Rólam' activePageIndex={1}>
      <SectionContainer background={BACKGROUND.PRIMARY} flex={FLEX.ROW} height={HEIGHT.MEDIUM}>
        <div ref={aboutContainer} className="animate-fadeInFromLeft opacity-0">
          <Title title={aboutContent.title} />
          <div className='flex flex-col lg:flex-row pt-16 gap-4'>
            <div className="w-3/3 lg:w-2/3 order-2 lg:order-1" >
              {aboutContent.introductionParagraphs.map((paragraph, i) => {
                return (
                  <div key={i} className="mb-8">
                    <TextBlock text={paragraph}/>
                  </div>
                )
              })}
            </div>
            <div className="w-3/3 lg:w-1/3 flex items-center justify-center" >
              <Carousel id="carousel1" images={aboutContent.introductionCarouselData.entries} />
            </div>
          </div>
        </div>
      </SectionContainer>

      <div className={'container max-w-full  mx-auto px-3 md:px-6 lg:px-24 bg-secondary hover:cursor-pointer'}>
        <div ref={competencyRef} className="h-16 flex items-center justify-center gap-0 lg:gap-10 cursor-pointer" onClick={toogleDropDown}>
          <h1 className=" text-highlightxl sm:text-highlight font-black flex flex-col  text-gray-800">{aboutContent.competencyTitle}</h1>
          <div className={"rounded-full flex items-center justify-center w-12 h-12 " + (dropDownOpen ? ' ' : 'mt-2 animate-bounce')}>
            <Image width={40} height={40} src='/svg/arrow.svg' className={"transition-all " + (dropDownOpen ? "rotate-[270deg]" : 'rotate-90')}></Image>
          </div>
        </div>

        <div className={"transition-all duration-1000	 overflow-hidden " + (dropDownOpen ? 'max-h-[120rem] scale-100' : "max-h-0 scale-0")}>
          <ul className='mb-6 list-disc'>
            {aboutContent.competencies.map((competency, i, arr) => {
              if (i === 0) {
                return (
                  <li  key={i} className="p-4 ">
                    <ListItem>
                      <span className='ml-4'>
                        {competency}
                      </span>
                    </ListItem>
                  </li>
                )
              } else {
                return (
                  <li key={i} className="p-4"><ListItem><span className='ml-4'>{competency}</span></ListItem></li>
                )
              }
            })}
          </ul>
        </div>
      </div>

      <SectionContainer background={BACKGROUND.PRIMARY} flex={FLEX.ROW} height={HEIGHT.MEDIUM}>
        <div ref={workContainer} className="animate-fadeInFromLeft opacity-0">
          <div className='flex flex-col lg:flex-row pt-16 gap-4'>
            <div className="w-3/3 lg:w-1/3 flex items-center justify-center" >
              <Carousel id="carousel2" images={aboutContent.workCarouselData.entries} />
            </div>
            <div className="w-3/3 lg:w-2/3 " >
              {aboutContent.workParagraphs.map((workParagraph, i) => {
                return (
                  <div className='mb-12' key={i}>
                    <Title subTitle={workParagraph.title} />
                    <div className="mt-2">
                    <TextBlock text={workParagraph.body}/>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </SectionContainer>
    </Layout>
  )
}

export default About;