import type { GetStaticProps, NextPage } from 'next'
import React, { useState } from 'react'
import Layout from '../components/layout'
import LIMarker from '../components/li-marker'
import { getCoachData } from '../lib/data-reader'
import { CoachData, CoachTypeSection } from '../lib/types/data-types'


export const getStaticProps: GetStaticProps = async (context) => {

  return {
    props: getCoachData()
  }
}


const Coach: NextPage<CoachData> = (coachContent: CoachData) => {

  const sections: CoachTypeSection[] = [
    coachContent.childCoachingSection,
    coachContent.teenagerCoachingSection,
    coachContent.parentCoachingSection
  ]

  const [activeView, setActiveVuew] = useState(sections[0])

  const interactiveAnimationStyle:string = "animate-activeToInteractive"



  const onTopBarClick = (buttonTitle: string) => {
    const section: CoachTypeSection | undefined = sections.find(section => section.buttonName === buttonTitle);
    if (section === undefined) {
      console.error("cannot find section with button title: " + buttonTitle);
    } else {
      setActiveVuew(section);
    }
  }

  return (

    <Layout title='Rólam' activePageIndex={2}>
      <div className="max-w-full min-h-screen mx-auto  pt-9 flex flex-col bg-primary">
        <div className='flex justify-center w-100 mb-9'>
          <h1 className='font-bebas-neue text-6xl sm:text-8xl font-black flex flex-col  text-gray-800'>{coachContent.coachSection.title}</h1>
        </div>
        <div className='px-3 md:px-6 lg:px-20'>
          {coachContent.coachSection.paragraphs.map(paragraph => {
            return (
              <p className='mb-2'>{paragraph}</p>
            )
          })}
          <span>További információ <a href={coachContent.coachSection.link}>Wikipedia</a></span>
        </div>
        <div className='flex justify-center w-100 mb-9'>
          <h1 className='font-bebas-neue text-6xl sm:text-8xl font-black flex flex-col  text-gray-800'>Tipusok</h1>
        </div>
        <div className='bg-secondary'>
          <ul className="flex justify-evenly text-center">
            {sections.map(section => {
              const active = activeView.buttonName === section.buttonName;
              return (
                <li onClick={() => onTopBarClick(section.buttonName)} key={section.buttonName} className={(active ? "bg-active" : interactiveAnimationStyle) + " grow hover:cursor-pointer transition-all "}>
                  <button className={(active ? "" : "") + " py-4"} type="button">{section.buttonName}</button>
                </li>
              )
            })}
          </ul>
          <div className="container max-w-full mx-auto px-3 md:px-6 lg:px-20 py-9 flex flex-col">
            {activeView.introductionParagraphs.map((paragraph, i) => {
              return (
                <p key={i}>{paragraph}</p>
              )
            })}
            <h1>{activeView.listTitle}</h1>
            <ul>
              {activeView.listItems.map((listItem, i) => {
                return (
                  <li key={i} className='flex align-center my-3 gap-3'>
                    <LIMarker/>
                    <span>{listItem}</span>
                    </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Coach;