import type { GetStaticProps, NextPage } from 'next'
import React from 'react'

import Layout from '../components/layout/layout'
import Link from '../components/link'
import ListItem from '../components/list-item'
import Price from '../components/price'
import Title from '../components/title'
import { getSchoolData } from '../lib/data-reader'
import { SchoolData } from '../lib/types/data-types'
import SectionContainer, { BACKGROUND, FLEX, HEIGHT } from '../components/section-container';


export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: getSchoolData()
    }
}

const School: NextPage<SchoolData> = (schoolData: SchoolData) => {
    return (
        <Layout title='Iskola előkészitő' activePageIndex={3}>
            <SectionContainer background={BACKGROUND.PRIMARY} flex={FLEX.ROW} height={HEIGHT.FULL}>
                <div className="animate-fadeInFromLeft opacity-0">
                    <Title title={schoolData.title} subTitle={schoolData.subtitle} />
                    <div className='py-3 md:py-6 lg:py-12'>
                        {schoolData.paragraphs.map(paragraph => {
                            return (
                                <p className='mb-2'>{paragraph}</p>
                            )
                        })}
                        <span>{schoolData.linkTitle} <Link href={schoolData.link} title={"Wikipedia"} /></span>
                    </div>
                </div>
            </SectionContainer>
            <SectionContainer background={BACKGROUND.SECONDARY} flex={FLEX.COLUMN} height={HEIGHT.MEDIUM}>
                <Title subTitle={schoolData.listTitle} />
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
            </SectionContainer>
        </Layout>
    )
}

export default School;