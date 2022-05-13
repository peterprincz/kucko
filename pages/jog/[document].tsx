import type { GetStaticProps, NextPage } from 'next'
import { getLegalData } from '../../lib/data-reader'
import { LegalData } from '../../lib/types/data-types'
import DefaultErrorPage from 'next/error'


import Layout from '../../components/layout/layout'
import SectionContainer, { BACKGROUND, FLEX, HEIGHT } from '../../components/section-container';
import Title from '../../components/title';


export async function getStaticPaths() {
  return {
    paths: [
      { params: { document: 'legalnotice' } },
      { params: { document: 'secrecy' } },
    ],
    fallback: true // false or 'blocking'
  };
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params && params.document) {
    let props: LegalData | undefined;
    if (Array.isArray(params.document)) {
      params.document = params.document[0];
    }
    props = getLegalData(params.document)
    return {
      props: props
    }
  } else {
    throw new Error("Invalid legalData: " + params)
  }
}


const LegalPage: NextPage<LegalData> = (legalData: LegalData) => {
  if(!legalData || !legalData.paragraphs){
    return(<DefaultErrorPage statusCode={404} />)
  }
  return (
    <Layout title={legalData.title} activePageIndex={-1} disableJsPlugin={true}>
      <SectionContainer background={BACKGROUND.WHITE} flex={FLEX.COLUMN} height={HEIGHT.MEDIUM}>
        <Title title={legalData.title} containerClass="mb-12 text-center" />
        {legalData.paragraphs.map(p => <p className='my-2'>{p}</p>)}
      </SectionContainer>
    </Layout>
  )
}

export default LegalPage;