import Head from 'next/head';
import React, { FC } from 'react'
import Footer from './footer';
import NavBar from './navbar';


const Layout: FC<{ title: string, activePageIndex: number }> = ({ children, title, activePageIndex }) => {
    return (
        <div >
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <title>{title}</title>
            </Head>
            <NavBar activePageIndex={activePageIndex} />
            <main className="flex w-full flex-1 flex-col items-center justify-center scroll-smooth">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
