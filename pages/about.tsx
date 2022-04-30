import type { GetStaticProps, NextPage } from 'next'
import React, { useEffect, useRef, useState } from 'react'
import Carousel from '../components/carousel'
import Layout from '../components/layout/layout'
import { getAboutData } from '../lib/data-reader'
import { AboutData } from '../lib/types/data-types'
import { fadeInFromLeft } from '../hooks/fades';
import ListItem from '../components/list-item'
import Title from '../components/title'


export const getStaticProps: GetStaticProps = async (context) => {

  return {
    props: getAboutData()
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
          window.scrollTo({top: y, behavior: 'smooth'});
          //competencyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
      <div className="container max-w-full mx-auto px-3 md:px-6 lg:px-24 py:3 md:py-20 lg:py-20 py-20 flex flex-col  bg-primary min-h-screen">
        <div ref={aboutContainer} className="animate-fadeInFromLeft opacity-0">
          <Title title='Bernadett Petrovics'/>
          <div className='flex flex-col lg:flex-row pt-16 gap-4'>
            <div className="w-3/3 lg:w-2/3 pr-10 order-2 lg:order-1" >
              {aboutContent.introductionParagraphs.map((paragraph, i) => {
                return (
                  <div key={i} className="mb-8">
                    <span>{paragraph}</span>
                  </div>
                )
              })}
            </div>
            <div className="w-3/3 lg:w-1/3 flex items-center justify-center" >
              <Carousel id="carousel1" images={aboutContent.introductionCarouselData.entries} />
            </div>
          </div>
        </div>
      </div>
      <div className={'container max-w-full  mx-auto px-3 md:px-6 lg:px-24 bg-secondary hover:cursor-pointer'}>
        <div ref={competencyRef} className="h-16 flex items-center justify-center gap-0 lg:gap-10 cursor-pointer" onClick={toogleDropDown}>
          <h1 className=" text-highlightxl sm:text-highlight font-black flex flex-col  text-gray-800">SZAKMAI KOMPETENCIÁIM</h1>
          <div className={"rounded-full flex items-center justify-center w-12 h-12 " + (dropDownOpen ? ' ' : 'mt-2 animate-bounce')}>
            <img src='/svg/arrow.svg' className={"transition-all " + (dropDownOpen ? "rotate-[270deg]" : 'rotate-90')}></img>
          </div>
        </div>

        <div className={"transition-all duration-1000	 overflow-hidden " + (dropDownOpen ? 'max-h-[120rem] scale-100' : "max-h-0 scale-0")}>
          <ul className='mb-6 list-disc'>
            {aboutContent.competencies.map((competency, i, arr) => {
              if (i ===  0) {
                return (
                  <li id="asd" key={i} className="p-4 ">
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
      <div className="container mx-auto px-3 md:px-6 lg:px-24 py:3 md:py-20 lg:py-20 flex flex-col pt-16 max-w-full bg-primary">
        <div ref={workContainer} className="animate-fadeInFromLeft opacity-0">
          <div className='flex flex-col lg:flex-row pt-16 gap-4'>
            <div className="w-3/3 lg:w-1/3 flex items-center justify-center" >
              <Carousel id="carousel2" images={aboutContent.workCarouselData.entries} />
            </div>
            <div className="w-3/3 lg:w-2/3 pr-10" >
              {aboutContent.workParagraphs.map((workParagraph, i) => {
                return (
                  <div className='mb-12' key={i}>
                    <Title subTitle={workParagraph.title}/>
                    <div className="mt-2">
                      <span>{workParagraph.body}</span>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </div>

    </Layout>
  )
}

export default About;