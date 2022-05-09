import Head from 'next/head';
import Script from 'next/script';
import React, { FC } from 'react'
import Footer from './footer';
import NavBar from './navbar';

const Layout: FC<{ title: string, activePageIndex: number, disableJsPlugin?:boolean }> = ({ children, title, activePageIndex, disableJsPlugin }) => {
    if(!disableJsPlugin){
        disableJsPlugin = false;
    }
    return (
        <div>
            {disableJsPlugin ? <></>:  <Script src='index.min.js'/>}
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <meta lang="hu"/>
                <meta name = "Description" content='Gyermek és ifjúsági szellemi-lelki tanácsadás, coaching és iskolaelőkészítő foglalkozások'/>
                <meta name='robots' content='all'/>
                <Script src="/tw-elements/dist/js/index.min.js" />    
                <title>{title}</title>
            </Head>
            <NavBar activePageIndex={activePageIndex} />
            <main className="flex w-full min-h-screen flex-1 flex-col items-center justify-center scroll-smooth min-h-[83vh] overflow-hidden">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
