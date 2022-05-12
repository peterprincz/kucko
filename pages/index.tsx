import type { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { useRef } from 'react'
import AboutSection from '../components/index/about-section'
import ContactSection from '../components/index/contact-sections'
import DetailsSection from '../components/index/details-section'
import Layout from '../components/layout/layout'
import Wave from '../components/index/wave'
import { IndexData } from '../lib/types/data-types'
import DriveFileHandler from '../lib/drive-reader'


export const getStaticProps: GetStaticProps = async (context) => {

  
  return {
    props: await DriveFileHandler.getAboutData(),
    revalidate: 180
  }
}

const Home: NextPage<IndexData> = (indexContent: IndexData) => {

  const detailsRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const contactRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    if (contactRef.current !== null) {
      const y = contactRef.current.getBoundingClientRect().top + window.pageYOffset + -100;
      window.scrollTo({top: y, behavior: 'smooth'});
      //contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      
    }
  };
  
  const scrollToDetails = () => {
    if (detailsRef.current !== null) {
      const y = detailsRef.current.getBoundingClientRect().top + window.pageYOffset + -100;
      window.scrollTo({top: y, behavior: 'smooth'});
      //detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      
    }
  };
  
  return (
    <Layout title='Kezdőlap' activePageIndex={0}>
      <div className="flex w-full">
        <AboutSection scrollOne={scrollToContact} scrollTwo={scrollToDetails} content={indexContent.aboutSection} />
      </div>
      <Wave inverse={true}></Wave>
      <div className="flex w-full">
        <DetailsSection selfRef={detailsRef} content={indexContent.detailsSection} />
      </div>
      <Wave inverse={false}></Wave>
      <div className="flex w-full">
        <ContactSection showTitle={true} selfRef={contactRef} content={indexContent.contactSection} />
      </div>
    </Layout>
  )
}

export default Home;