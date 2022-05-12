import type { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { useRef } from 'react'
import ContactSection from '../components/index/contact-sections'
import Layout from '../components/layout/layout'
import { IndexData } from '../lib/types/data-types'
import driveFileHandler from '../lib/drive-reader'


export const getStaticProps: GetStaticProps = async (context) => {

  return {
    props: driveFileHandler.getIndexData()
  }
}

const Home: NextPage<IndexData> = (indexContent: IndexData) => {
const contactRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  return (
    <Layout title='Kapcsolat' activePageIndex={4}>
      <div className="flex w-full">
        <ContactSection showTitle={true} selfRef={contactRef} content={indexContent.contactSection} />
      </div>
    </Layout>
  )
}

export default Home;