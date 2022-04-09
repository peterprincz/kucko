import React, { FC, useEffect } from 'react'
import { fadeInFromRight } from '../hooks/fades';
import { DetailsSection } from '../lib/types/data-types';
import Image from 'next/image'



const DetailsSection: FC<{ selfRef: React.RefObject<HTMLDivElement>, content: DetailsSection }> = ({ selfRef, content, children }) => {


  const sectionContentStyle = "sm:w-1/3 md:w-2/5 lg:w-3/5 flex flex-col";
  const sectionImageStyle = "hidden sm:block sm:w-2/3 md:w-3/5 lg:w-2/5 px-2";


  useEffect(() => {
    const fadeInFromRightObserver: IntersectionObserver = new IntersectionObserver(fadeInFromRight);
    if (selfRef.current != null) {
      fadeInFromRightObserver.observe(selfRef.current);
    }
  });

  return (
    <div className="container flex mx-auto px-3 md:px-6 lg:px-48 py:3 md:py-24 lg:py-20 flex py-16 max-w-full bg-secondary min-h-screen">
      <div className={sectionImageStyle}>
        <Image src={content.image} layout="intrinsic" width={1080} height={1482} className="mr-auto" />
      </div>
      <div className={sectionContentStyle + " animate-fadeInFromRight opacity-0 flex items-center"} ref={selfRef} >
        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800">
          {content.titleTop}
          <span className="text-5xl sm:text-4xl">
            {content.titleBottom}
          </span>
        </h1>
        <ul className="mt-10">
          {content.paragraphs.map((parapgraph, i) => {
            return(
            <li key={i} className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full  bg-interactive text-white">
                    
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 text-gray-900 font-bold">
                    {parapgraph.title}
                  </h5>
                  <p className="mt-2 leading-6 text-gray-500">
                    {parapgraph.body}
                  </p>
                </div>
              </div>
            </li>
            )
          })}


        </ul>
      </div>
    </div>

  )
}

export default DetailsSection;
