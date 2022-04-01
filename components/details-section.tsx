import React, { FC, Props, useEffect, useRef } from 'react'
import { fadeInFromLeft, fadeInFromRight, fadeInFromBottom } from '../hooks/fades';


const DetailsSection: FC<{ selfRef: React.RefObject<HTMLDivElement> }> = ({ selfRef, children }) => {


  const sectionContentStyle = "sm:w-1/3 md:w-2/5 lg:w-3/5 flex flex-col";
  const sectionImageStyle = "hidden sm:block sm:w-2/3 md:w-3/5 lg:w-2/5 px-2";


  useEffect(() => {
    const fadeInFromRightObserver: IntersectionObserver = new IntersectionObserver(fadeInFromRight);
    if (selfRef.current != null) {
      fadeInFromRightObserver.observe(selfRef.current);
    }
  });

  return (
    <div className="container mx-auto px-3 md:px-6 lg:px-48 py:3 md:py-24 lg:py-20 flex py-16 max-w-full bg-red-200 min-h-screen">
      <div className={sectionImageStyle}>
        <img src="https://www.tailwind-kit.com/images/object/8.jpg" className="mr-auto" />
      </div>
      <div className={sectionContentStyle + " animate-fadeInFromRight"} ref={selfRef} >
        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
          Miket
          <span className="text-5xl sm:text-4xl">
            ajánlok?
          </span>
        </h1>
        <ul className="mt-10">
          <li>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg width="20" height="20" fill="currentColor" className="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h5 className="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                  One-look dashboard
                </h5>
                <p className="mt-2 leading-6 text-gray-500 dark:text-gray-300">
                  Know everything about your business in a single glance with your new dashboard.
                </p>
              </div>
            </div>
          </li>
          <li className="mt-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg width="20" height="20" fill="currentColor" className="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h5 className="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                  Orders, managed
                </h5>
                <p className="mt-2 leading-6 text-gray-500 dark:text-gray-300">
                  All your orders in one place so you can manage your delivery, collection, asap and pre-orders in one place.
                </p>
              </div>
            </div>
          </li>
          <li className="mt-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg width="20" height="20" fill="currentColor" className="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h5 className="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                  Email &amp; SMS Notifications
                </h5>
                <p className="mt-2 leading-6 text-gray-500 dark:text-gray-300">
                  Never miss a new order with notifications via your dashboard, by sound, and to your email and phone.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default DetailsSection;
