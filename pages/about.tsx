import type { GetStaticProps, NextPage } from 'next'
import React, { useEffect, useRef, useState } from 'react'
import Carousel from '../components/carousel'
import Layout from '../components/layout'
import { getAboutData } from '../lib/data-reader'
import { AboutData } from '../lib/types/data-types'


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


  return (

    <Layout title='Galléria' activePageIndex={1}>
      <div className="container max-w-full mx-auto px-3 md:px-6 lg:px-20 py:3 md:py-24 lg:py-20 py-16 flex flex-col  bg-red-200 min-h-screen">
        <div className="animate-fadeInFromLeft opacity-0">
          <h1 className="font-bebas-neue text-6xl sm:text-8xl font-black flex flex-col  text-gray-800">
            Bernadett Petrovics
            <span className="text-6 xl sm:text-6xl">
              Coach
            </span>
          </h1>
          <div className='flex'>
            <div className="w-2/3 pr-10" >
              {aboutContent.introductionParagraphs.map((paragraph, i) => {
                return (
                  <div key={i} className="mb-8">
                    <span>{paragraph}</span>
                  </div>
                )
              })}
            </div>
            <div className="w-1/3 flex items-center" >
              <Carousel id="carousel1" images={aboutContent.introductionCarouselData.entries} />
            </div>
          </div>
        </div>
      </div>
      <div className='container max-w-full  mx-auto px-3 md:px-6 lg:px-20 bg-blue-100'>
        <div className="h-16 flex items-center justify-center gap-10 cursor-pointer border-b-4 border-indigo-500" onClick={toogleDropDown}>
          <h1 className="font-bebas-neue text-2xl sm:text-2 font-black flex flex-col  text-gray-800">SZAKMAI KOMPETENCIÁIM</h1>
          <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center animate-bounce w-6 h-6 ">
            <svg className={"transition-all duration-1000 " + (dropDownOpen ? "rotate-[270deg]" : "rotate-90")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#FFFFFF" /></svg>
          </div>
        </div>

        <div className={"transition-all duration-1000	 overflow-hidden " + (dropDownOpen ? 'max-h-[64rem] scale-100' : "max-h-0 scale-0")}>
          <ul className='mb-6 list-disc'>
            <li className="p-4 ">ELTE Tanító- és Óvóképző Főiskola Karán - Óvodapedagógus szak</li>
            <li className="p-4 ">Budapesti Műszaki és Gazdaságtudományi Egyetem Gazdaság- és Társadalomtudományi Karán – Szakvizsgázott pedagógus, közoktatási vezető</li>
            <li className="p-4 ">Budapesti Műszaki és Gazdaságtudományi Egyetem Gazdaság- és Társadalomtudományi Karán – Szakvizsgázott pedagógus, mentorpedagógus szakterületen</li>
            <li className="p-4 ">Újrahangolás Központ: TA módszertan</li>
            <li className="p-4 ">Újrahangolás Központ: Elengedés felsőfokon</li>
            <li className="p-4 ">Újrahangolás Központ: Gyermek és Ifjúsági coach</li>
            <li className="p-4 " ref={liRef}>Újrahangolás Központ: Gyermek és Ifjúsági VMI módszerspecifikus képzés</li>
            <li className="p-4 ">Újrahangolás Központ: Sorskönyvi újraírás</li>
            <li className="p-4 ">Újrahangolás Központ: Saját gyermekkor újraírás</li>
            <li className="p-4 ">Újrahangolás Központ: Integrált testtudatosság vizualizációval</li>
            <li className="p-4 ">Újrahangolás Központ: Újrahangolás Konzulens (folyamatban)</li>
            <li className="p-4 ">Újrahangolás Központ: Újrahangolás alkalmazó gyermek és ifjúsági szellemi- lelki coach újrahangolás konzulens (folyamatban)</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-3 md:px-6 lg:px-20 py:3 md:py-24 lg:py-20 flex flex-col py-16 max-w-full bg-red-200 min-h-screen">
        <div className="animate-fadeInFromRight opacity-0">
          <div className='flex'>
            <div className="w-1/3 flex items-center" >
              <Carousel id="carousel2" images={aboutContent.workCarouselData.entries} />
            </div>
            <div className="w-2/3 pl-10" >
              {aboutContent.workParagraphs.map((workParagraph, i) => {
                return (
                  <div className='mb-12' key={i}>
                    <h6 className="font-bebas-neue text-3xl sm:text-3xl font-black text-gray-800 mb-4">
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