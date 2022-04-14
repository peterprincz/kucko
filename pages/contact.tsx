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
  
const contactRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  return (
    <Layout title='Kezdőlap' activePageIndex={4}>
      <div className="flex w-full">
        <ContactSection showTitle={false} selfRef={contactRef} content={indexContent.contactSection} />
      </div>
    </Layout>
  )
}

export default Home;