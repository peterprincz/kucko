import type { GetStaticProps, NextPage } from 'next'
import React, { useEffect, useRef, useState } from 'react'
import Carousel from '../components/carousel'
import Layout from '../components/layout'
import { getAboutData } from '../lib/data-reader'
import { AboutData } from '../lib/types/data-types'
import { fadeInFromLeft } from '../hooks/fades';


export const getStaticProps: GetStaticProps = async (context) => {

  return {
    props: getAboutData()
  }
}


const About: NextPage<AboutData> = (aboutContent: AboutData) => {

  const liRef: React.RefObject<HTMLLIElement> = useRef<HTMLLIElement>(null);

  const [dropDownOpen, setDropDownOpen] = useState(false)

  const toogleDropDown = () => {
    console.log(dropDownOpen)
    if (dropDownOpen) {
      setDropDownOpen(false)
    } else {
      setDropDownOpen(true)
      setTimeout(() => {
        if (liRef.current != null) {
          liRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
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
          <h1 className="font-bebas-neue text-big sm:text-huge font-black flex flex-col  text-gray-800 leading-none">
            Bernadett Petrovics
            <span className="text-big mt-4">
              Coach
            </span>
          </h1>
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
      <div className='container max-w-full  mx-auto px-3 md:px-6 lg:px-24 bg-secondary hover:cursor-pointer'>
        <div className="h-16 flex items-center justify-center gap-10 cursor-pointer" onClick={toogleDropDown}>
          <h1 className="font-bebas-neue text-highlightxl sm:text-highlight font-black flex flex-col  text-gray-800">SZAKMAI KOMPETENCIÁIM</h1>
          <div className={"rounded-full w-12 h-12 flex items-center justify-center w-12 h-12 " + (dropDownOpen ? ' ' : 'mt-2 animate-bounce')}>
            <img src='/svg/arrow.svg' className={"transition-all " + (dropDownOpen ? "rotate-[270deg]": 'rotate-90')}></img>
          </div>
        </div>

        <div className={"transition-all duration-1000	 overflow-hidden " + (dropDownOpen ? 'max-h-[64rem] scale-100' : "max-h-0 scale-0")}>
          <ul className='mb-6 list-disc'>
            {aboutContent.competencies.map((competency, i, arr) => {
              if (i == arr.length / 2) {
                return (
                  <li key={i} ref={liRef} className="p-4 ">{competency}</li>
                )
              } else {
                return (
                  <li key={i} className="p-4 ">{competency}</li>
                )
              }
            })}
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-3 md:px-6 lg:px-24 py:3 md:py-20 lg:py-20 flex flex-col pt-16 max-w-full bg-primary">
        <div ref={workContainer}  className="animate-fadeInFromLeft opacity-0">
          <div className='flex flex-col lg:flex-row pt-16 gap-4'>
            <div className="w-3/3 lg:w-1/3 flex items-center justify-center" >
              <Carousel id="carousel2" images={aboutContent.workCarouselData.entries} />
            </div>
            <div className="w-3/3 lg:w-2/3 pr-10" >
              {aboutContent.workParagraphs.map((workParagraph, i) => {
                return (
                  <div className='mb-12' key={i}>
                    <h6 className="font-bebas-neue text-highlight sm:text-highlight font-black text-gray-800 mb-2">
                      {workParagraph.title}
                    </h6>
                    <div>
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