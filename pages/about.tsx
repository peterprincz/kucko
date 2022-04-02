import type { GetStaticProps, NextPage } from 'next'
import React, { useEffect }  from 'react'
import Carousel from '../components/carousel'
import Layout from '../components/layout'
import { getAboutData } from '../lib/data-reader'
import { AboutData } from '../lib/types/data-types'


export const getStaticProps: GetStaticProps = async(context) => {

  return {
    props: getAboutData()
  }
}


const About: NextPage<AboutData> = (aboutContent:AboutData) => {

  return (
    <Layout title='Galléria' activePageIndex={1}>
      <Carousel images={aboutContent.carouselData.entries}/>
    </Layout>
  )
}

export default About;