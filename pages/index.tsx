import type { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { useRef } from 'react'
import AboutSection from '../components/about-section'
import Carousel from '../components/carousel'
import ContactSection from '../components/contact-sections'
import DetailsSection from '../components/details-section'
import Layout from '../components/layout'
import { getIndexData } from '../lib/data-reader'
import { CarouselData, IndexData } from '../lib/types/data-types'


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

  const data: CarouselData = {
    entries: [{
      img: "https://mdbootstrap.com/img/Photos/Slides/img%20(123).jpg",
      labelTitle: "First slide label",
      labelBody: "Some representative placeholder content for the first slide"
    },
    {
      img: "https://mdbootstrap.com/img/Photos/Slides/img%20(123).jpg",
      labelTitle: "First slide label",
      labelBody: "Some representative placeholder content for the first slide"
    },
    {
      img: "https://mdbootstrap.com/img/Photos/Slides/img%20(123).jpg",
      labelTitle: "First slide label",
      labelBody: "Some representative placeholder content for the first slide"
    }
    ]
  }

  
  return (
    <Layout title='Kezdőlap' activePageIndex={0}>
      <div className="flex w-full bg-blue-300">
        <AboutSection scrollOne={scrollToContact} scrollTwo={scrollToDetails} content={indexContent.aboutSection} />
      </div>
      <div className="flex w-full bg-blue-300">
        <DetailsSection selfRef={detailsRef} content={indexContent.detailsSection} />
      </div>
      <div className="flex w-full bg-blue-300">
        <ContactSection selfRef={contactRef} content={indexContent.contactSection} />
      </div>
    </Layout>
  )
}

export default Home;