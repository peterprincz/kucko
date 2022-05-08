import type { GetStaticProps, NextPage } from 'next'
import React, { useRef, useState } from 'react'
import Layout from '../components/layout/layout'
import Link from '../components/link'
import ListItem from '../components/list-item'
import Price from '../components/price'
import Title from '../components/title'
import { getCoachData } from '../lib/data-reader'
import { CoachData, CoachTypeSection } from '../lib/types/data-types'
import SectionContainer, { BACKGROUND, FLEX, HEIGHT } from '../components/section-container';
import TextBlock from '../components/text-block'



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
      <SectionContainer background={BACKGROUND.PRIMARY} flex={FLEX.COLUMN} height={HEIGHT.FULL}>
        <div className='animate-fadeInFromLeft'>
          <div className='flex justify-center w-100 mb-9'>
            <Title title={coachContent.coachSection.title} />
          </div>
          {coachContent.coachSection.paragraphs.map(paragraph => {
            return (
              <div className='mt-2'>
                <TextBlock text={paragraph}/>
              </div>
            )
          })}
          <span>{coachContent.coachSection.linkSpan}<Link href={coachContent.coachSection.link} title={"Wikipedia"} /></span>
        </div>
        <div className='flex justify-center w-100 mb-9 mt-9'>
          <Title title="Coaching tipusok" />
        </div>  
        <div className='bg-secondary min-h-screen animate-fadeInFromBottom'>
          <ul className="flex justify-evenly text-center border-[#dbb2b4] border-b-2">
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
          <div className="container max-w-full mx-auto px-3 md:px-6 lg:px-24 py-9 flex flex-col min-h-100 transition-all shadow-lg rounded-lg	">
            <div key={browserCounter} className='animate-fadeInFromBottom'>
              {activeView.introductionParagraphs.map((paragraph, i) => {
                return (
                  <div key={i} className='mt-2'>
                    <TextBlock key={i} text={paragraph}/>
                  </div>
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
      </SectionContainer>
    </Layout>
  )
}

export default Coach;