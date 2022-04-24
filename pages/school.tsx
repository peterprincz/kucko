import type { GetStaticProps, NextPage } from 'next'
import React from 'react'

import Layout from '../components/layout/layout'
import ListItem from '../components/list-item'
import Price from '../components/price'
import Title from '../components/title'
import { getSchoolData } from '../lib/data-reader'
import { SchoolData } from '../lib/types/data-types'


export const getStaticProps: GetStaticProps = async (context) => {

    return {
        props: getSchoolData()
    }
}


const School: NextPage<SchoolData> = (schoolData: SchoolData) => {
    return (
        <Layout title='Iskola előkészitő' activePageIndex={3}>
            <div className="container max-w-full mx-auto px-3 md:px-6 lg:px-24 py:3 md:py-20 lg:py-20 py-20 flex flex-col  bg-primary min-h-screen">
                <div className="animate-fadeInFromLeft opacity-0">
                    <Title title={schoolData.title} subTitle={schoolData.subtitle}/>
                    <div className='py-3 md:py-6 lg:py-12'>
                        {schoolData.paragraphs.map(paragraph => {
                            return (
                                <p className='mb-2'>{paragraph}</p>
                            )
                        })}
                        <span>{schoolData.linkTitle}<a href={schoolData.link}>Wikipedia</a></span>
                    </div>
                </div>
            </div>
            <div className="container max-w-full mx-auto px-3 md:px-6 lg:px-24 py:3 md:py-20 lg:py-20 py-20 flex flex-col  bg-secondary min-h-screen">
                <Title subTitle={schoolData.listTitle}/>
                <ul className='my-6 list-disc'>
                    {schoolData.listItems.map((item, i, arr) => {
                        return (
                            <div id="asd" key={i} className="p-4 ">
                                <ListItem>
                                    <span className='ml-4'>
                                        {item}
                                    </span>
                                </ListItem>
                            </div>
                        )
                    })}
                </ul>
                <Price price={schoolData.price} />
            </div>
        </Layout>
    )
}

export default School;