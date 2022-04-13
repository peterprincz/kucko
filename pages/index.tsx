import type { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { useRef } from 'react'
import AboutSection from '../components/about-section'
import ContactSection from '../components/contact-sections'
import DetailsSection from '../components/details-section'
import Layout from '../components/layout'
import Wave from '../components/wave'
import { getIndexData } from '../lib/data-reader'
import { IndexData } from '../lib/types/data-types'


export const getStaticProps: GetStaticProps = async (context) => {

  return {
    props: getIndexData()
  }
}


const Home: NextPage<IndexData> = (indexContent: IndexData) => {

  const detailsRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const contactRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    if (contactRef.current !== null) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  };
  const scrollToDetails = () => {
    if (detailsRef.current !== null) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
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
        <ContactSection selfRef={contactRef} content={indexContent.contactSection} />
      </div>
    </Layout>
  )
}

export default Home;