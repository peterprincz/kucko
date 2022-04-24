import type { GetStaticProps, NextPage } from 'next'
import React, { useRef, useState } from 'react'
import Layout from '../components/layout'
import ListItem from '../components/list-item'
import LIMarker from '../components/list-item'
import Price from '../components/price'
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


  const [activeView, setActiveView] = useState(sections[0])
  const [browserCounter, setBrowserCounter] = useState(0)

  const onTopBarClick = (buttonTitle: string) => {
    setBrowserCounter(browserCounter + 1);
    const section: CoachTypeSection | undefined = sections.find(section => section.buttonName === buttonTitle);
    if (activeView === section) {
      return;
    }
    if (section === undefined) {
      console.error("cannot find section with button title: " + buttonTitle);
      return;
    }
    setActiveView(section);

  }

  return (

    <Layout title='Rólam' activePageIndex={2}>
      <div className="max-w-full min-h-screen mx-auto  pt-9 flex flex-col bg-primary">
        <div className='flex justify-center w-100 mb-9'>
          <h1 className=' text-big sm:text-huge font-black flex flex-col  text-gray-800'>{coachContent.coachSection.title}</h1>
        </div>
        <div className='px-3 md:px-6 lg:px-24'>
          {coachContent.coachSection.paragraphs.map(paragraph => {
            return (
              <p className='mb-2'>{paragraph}</p>
            )
          })}
          <span>További információ <a href={coachContent.coachSection.link}>Wikipedia</a></span>
        </div>
        <div className='flex justify-center w-100 mb-9 mt-9'>
          <h1 className=' text-big sm:text-huge font-black flex flex-col  text-gray-800'>Tipusok</h1>
        </div>
        <div className='bg-secondary min-h-screen '>
          <ul className="flex justify-evenly text-center">
            {sections.map(section => {
              const active = activeView.buttonName === section.buttonName;
              return (
                <li onClick={() => onTopBarClick(section.buttonName)} key={section.buttonName} className={
                  (active ? "" : "transition-all delay-50 hover:bg-interactive bg-active shadow-lg")
                  + " hover:cursor-pointer grow"
                  + " border-primary border-x-2"

                }>
                  <div className={(active ? "" : "") + " py-4"} >{section.buttonName}</div>
                </li>
              )
            })}
          </ul>
          <div className="container max-w-full mx-auto px-3 md:px-6 lg:px-24 py-9 flex flex-col min-h-100 transition-all	">
            <div key={browserCounter} className='animate-fadeInFromLeft'>
              {activeView.introductionParagraphs.map((paragraph, i) => {
                return (
                  <p key={i}>{paragraph}</p>
                )
              })}
              <div className='mb-8 mt-6'>
                <span className=" text-highlight sm:text-highlight font-black text-gray-800 ">
                  {activeView.listTitle}
                </span>
              </div>

              <ul>
                {activeView.listItems.map((listItem, i) => {
                  return (
                    <li key={i} className='flex align-center my-3 gap-3'>
                      <ListItem>
                        <span className='ml-4'>{listItem}</span>
                      </ListItem>
                    </li>
                  )
                })}
              </ul>
              <Price price={activeView.price}>

              </Price>
              {activeView.cancellation}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Coach;