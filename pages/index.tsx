import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import AboutSection from '../components/about-section'
import ContactSection from '../components/contact-sections'
import DetailsSection from '../components/details-section'
import Footer from '../components/footer'
import NavBar from '../components/navbar'

const Home: NextPage = () => {

  const detailsRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const contactRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

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
            <AboutSection scrollOne={scrollToContact} scrollTwo={scrollToDetails} />
          </div>
          <div className="flex w-full bg-blue-300">
            <DetailsSection selfRef={detailsRef} />
          </div>
          <div className="flex w-full bg-blue-300">
            <ContactSection selfRef={contactRef} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Home;