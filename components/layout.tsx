import Head from 'next/head';
import Script from 'next/script';
import React, { FC } from 'react'
import Footer from './footer';
import NavBar from './navbar';


const Layout: FC<{ title: string, activePageIndex: number }> = ({ children, title, activePageIndex }) => {
    return (
        <div >
            <Script src='index.min.js'/>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <Script src="/tw-elements/dist/js/index.min.js" />    
                <title>{title}</title>
            </Head>
            <NavBar activePageIndex={activePageIndex} />
            <main className="flex w-full min-h-screen flex-1 flex-col items-center justify-center scroll-smooth min-h-[83vh]">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
