import React, { FC, useEffect } from 'react'
import { fadeInFromRight } from '../hooks/fades';
import { DetailsSection } from '../lib/types/data-types';
import Image from 'next/image'
import ListItem from './list-item';



const DetailsSection: FC<{ selfRef: React.RefObject<HTMLDivElement>, content: DetailsSection }> = ({ selfRef, content, children }) => {


  const sectionContentStyle = "flex flex-col";
  const sectionImageStyle = "hidden lg:flex lg:w-2/5 px-2 items-center";


  useEffect(() => {
    const fadeInFromRightObserver: IntersectionObserver = new IntersectionObserver(fadeInFromRight);
    if (selfRef.current != null) {
      fadeInFromRightObserver.observe(selfRef.current);
    }
  });

  return (
    <div className="container mx-auto px-3 md:px-6 lg:px-24 py:3 md:py-6 lg:py-20 flex py-20 max-w-full bg-secondary min-h-[90vh]">
      <div className={sectionContentStyle + " animate-fadeInFromRight opacity-0 grow"} ref={selfRef} >
        <h1 className=" uppercase text-big sm:text-huge font-black flex flex-col leading-none text-gray-800">
          {content.titleTop}
          <span className="text-big sm:text-big">
            {content.titleBottom}
          </span>
        </h1>
        <div className='flex justify-around mt-20'>
          {content.sides.map((side, i) => {
            return (
              <div key={i}>
                <h1 className='text-gray-800 font-black text-big'>{side.title}</h1>
                <ul className="mt-10">
                  {side.paragraphs.map((parapgraph, i) => {
                    return (
                      <li key={i} className="mt-10">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <ListItem>
                              <div className="ml-4">
                                <h5 className="text-lg leading-6 text-gray-800 font-bold">
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
    </div>

  )
}

export default DetailsSection;
