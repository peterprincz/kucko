import React, { FC, useEffect } from 'react'
import { fadeInFromRight } from '../../hooks/fades';
import { DetailsSection } from '../../lib/types/data-types';
import ListItem from '../list-item';
import Title from '../title';
import SectionContainer, { BACKGROUND, FLEX, HEIGHT } from '../section-container'




const DetailsSection: FC<{ selfRef: React.RefObject<HTMLDivElement>, content: DetailsSection }> = ({ selfRef, content, children }) => {


  const sectionContentStyle = "flex flex-col";


  useEffect(() => {
    const fadeInFromRightObserver: IntersectionObserver = new IntersectionObserver(fadeInFromRight);
    if (selfRef.current != null) {
      fadeInFromRightObserver.observe(selfRef.current);
    }
  });

  return (
    <SectionContainer background={BACKGROUND.SECONDARY} flex={FLEX.ROW} height={HEIGHT.FULL}>
      <div className={sectionContentStyle + " animate-fadeInFromRight opacity-0 grow"} ref={selfRef} >
        <Title title={content.titleTop} subTitle={content.titleBottom} />
        <div className='flex flex-col md:flex-row justify-around mt-20'>
          {content.sides.map((side, i) => {
            return (
              <div key={i}>
                <Title subTitle={side.title} />
                <ul className="mt-10">
                  {side.paragraphs.map((parapgraph, i) => {
                    return (
                      <li key={i} className="mt-10">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <ListItem>
                              <div className="ml-4">
                                <h5 className="leading-6 text-gray-800 font-bold">
                                  {parapgraph.title}
                                </h5>
                                <p className="mt-2 leading-6 text-gray-600">
                                  {parapgraph.body}
                                </p>
                              </div>
                            </ListItem>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </SectionContainer>
  )
}

export default DetailsSection;
