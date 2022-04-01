import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import { fadeInFromBottom, fadeInFromLeft, fadeInFromRight } from '../hooks/fades'

const Home: NextPage = () => {

  const introRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const detailsRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const contactRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const fadeInFromLeftElements: React.RefObject<HTMLDivElement>[] = [introRef];
  const fadeInFromRightElements: React.RefObject<HTMLDivElement>[] = [detailsRef];
  const fadeInFromBottomElements: React.RefObject<HTMLDivElement>[] = [contactRef];

  useEffect(() => {
    const fadeInFromLeftObserver: IntersectionObserver = new IntersectionObserver(fadeInFromLeft);
    const fadeInFromRightObserver: IntersectionObserver = new IntersectionObserver(fadeInFromRight);
    const fadeInFromBottomObserver: IntersectionObserver = new IntersectionObserver(fadeInFromBottom);

    fadeInFromLeftElements.forEach(element => {
      if (element.current != null) {
        fadeInFromLeftObserver.observe(element.current);
      }
    })

    fadeInFromRightElements.forEach(element => {
      if (element.current != null) {
        fadeInFromRightObserver.observe(element.current);
      }
    })

    fadeInFromBottomElements.forEach(element => {
      if (element.current != null) {
        fadeInFromBottomObserver.observe(element.current);
      }
    })
  });

  const scrollToContact = () => {
    if (contactRef.current !== null) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  };
  const scrollToDetails = () => {
    if (detailsRef.current !== null) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  };


  const sectionParagraphStyle = "text-left text-gray-700 mb-4";
  const sectionImageStyle = "hidden sm:block sm:w-2/3 md:w-3/5 lg:w-2/5 px-2";
  const sectionContentStyle = "sm:w-1/3 md:w-2/5 lg:w-3/5 flex flex-col";

  return (
    <div>

      <div className="flex min-h-screen flex-col items-center justify-center py-2">

        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar activePageIndex={0} />


        <main className="flex w-full flex-1 flex-col items-center justify-center mx-5 md:mx-20">
          <div className="flex w-full bg-blue-300" >
            <div className="container mx-auto px-3 md:px-6 lg:px-48 py:3 md:py-6 lg:py-20 flex py-16 max-w-full bg-slate-300 min-h-screen">
              <div ref={introRef} className={sectionContentStyle + " animate-fadeInFromLeft"}>
                <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                  Miben tudok
                  <span className="text-5xl sm:text-7xl">
                    segíteni?
                  </span>
                </h1>
                <p className={sectionParagraphStyle}>
                  Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                </p>
                <p className={sectionParagraphStyle}>
                  Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                </p>
                <p className={sectionParagraphStyle}>
                  Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                </p>
                <div className="flex mt-8">
                  <button className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400" onClick={scrollToContact}>
                    Kapcsolat
                  </button>
                  <button className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md" onClick={scrollToDetails}>
                    Tovább olvasok
                  </button>
                </div>
              </div>
              <div className={sectionImageStyle}>
                <img src="https://static.wixstatic.com/media/aab78a_b854a766f50242a695e45a5585c23fc3~mv2.jpg/v1/fill/w_319,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/image0_edited.jpg" className="ml-auto" />
              </div>
            </div>
          </div>
          <div className="flex w-full bg-blue-300">
            <div className="container mx-auto px-3 md:px-6 lg:px-48 py:3 md:py-24 lg:py-20 flex py-16 max-w-full bg-red-200 min-h-screen">
              <div className={sectionImageStyle}>
                <img src="https://www.tailwind-kit.com/images/object/8.jpg" className="mr-auto" />
              </div>
              <div className={sectionContentStyle + " animate-fadeInFromRight"} ref={detailsRef} >
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
          </div>
          <div className="flex w-full bg-blue-300">
            <div className="container mx-auto px-3 md:px-6 lg:px-48 py:3 py-6 lg:py-20 flex flex-col justify-center items-center dpy-16 max-w-full bg-blue-200 min-h-screen">
              <div ref={contactRef} className='animate-fadeInFromBottom'>
                <h1 className="self-baseline font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                  Itt
                  <span className="text-5xl sm:text-7xl">
                    Elérsz
                  </span>
                </h1>
                <div className="sm:flex flex-wrap justify-between items-center text-center gap-8 animate-fadeInFromBottom">
                  <div className="w-full min-w-[16em] sm:w-1/2 md:w-1/3 px-4 py-4 mt-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 m-auto">
                    <div className="flex-shrink-0">
                      <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg width="20" height="20" fill="currentColor" className="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                      Facebook
                    </h3>
                    <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
                      Facebook ide
                    </p>
                  </div>
                  <div className="w-full min-w-[16em] sm:w-1/2 md:w-1/3 px-4 py-4 mt-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 m-auto">
                    <div className="flex-shrink-0">
                      <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg width="20" height="20" fill="currentColor" className="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                      Email
                    </h3>
                    <p className="text-md text-gray-500 dark:text-gray-300 py-4">
                      Email ide
                    </p>
                  </div>
                  <div className="w-full min-w-[16em] sm:w-1/2 md:w-1/3  px-4 py-4 mt-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 m-auto">
                    <div className="flex-shrink-0">
                      <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg width="20" height="20" fill="currentColor" className="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                      Telefon
                    </h3>
                    <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
                      Telefon ide
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </main>
        <Footer />
      </div>
    </div>
  )
}

function useOnScreen(ref: any) {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )

  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}

export default Home;