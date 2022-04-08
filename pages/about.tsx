import type { GetStaticProps, NextPage } from 'next'
import React, { useEffect } from 'react'
import Carousel from '../components/carousel'
import Layout from '../components/layout'
import { getAboutData } from '../lib/data-reader'
import { AboutData } from '../lib/types/data-types'


export const getStaticProps: GetStaticProps = async (context) => {

  return {
    props: getAboutData()
  }
}


const About: NextPage<AboutData> = (aboutContent: AboutData) => {

  const sectionContentStyle = "sm:w-1/3 md:w-2/5 lg:w-3/5 flex flex-col";
  const sectionImageStyle = "hidden sm:block sm:w-2/3 md:w-3/5 lg:w-2/5 px-2";

  return (
    <Layout title='Galléria' activePageIndex={1}>
      <div className="container mx-auto px-3 md:px-6 lg:px-48 py:3 md:py-24 lg:py-20 flex py-16 max-w-full bg-red-200 min-h-screen">
        <div className="container mx-auto px-3 md:px-6 lg:px-48 py:3 md:py-24 lg:py-20 flex py-16 max-w-full bg-red-200 min-h-screen">
          <div className={sectionContentStyle + " animate-fadeInFromRight opacity-0"}>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Bernadett Petrovics
              <span className="text-5xl sm:text-4xl">
                Coach
              </span>
            </h1>
            <p>
            Alap végzettségemet tekintve óvodapedagógus vagyok. 22 évet töltöttem a pedagógusi
pályán. Sok tapasztalatot szereztem, hogy megismerjem a gyermeki lelket, az elakadásokat,
felismerjem a nehézségeket és a tanulási problémákat. Pár évvel ezelőtt részt vettem egy
továbbképzésen melyet Redő Júlia tartott az EMK-ról (Együttműködő, Erőszakmentes
Kommunikációról) és megismertette velünk a Kompátia- életkerekítő játékokat
(közösségépítő és érzelmi intelligencia fejlesztő). Ezeket a játékokat gyermekek és felnőttek
egyaránt használhatják családban, közösségekben (óvodában, iskolában, munkahelyen, akár
otthon is) egyaránt. Minden szülő, így én is, a lehető legjobbat szeretné gyermekének. Két
gyermek édesanyjaként számomra a legfontosabb az ő boldogságuk, és boldogulásuk.
Az EMK és Kompátia megismerése után elindultam egy úton, de folyamatosan kerestem a
megoldást, hogyan is tudnék segíteni, és hogyan is tudnék mégtöbbet nyújtani, és ezt a
coachingban találtam meg. A coaching képzés során a tanárunk többször elmondta, hogy
minden coachnak megvan a maga személyes története. Olyan emberek vannak a coaching
folyamatban Önök mellett, akik maguk is megvívták vagy éppen vívják saját csatáikat.
Hosszú út, és méghosszabb történetek vannak a segítséget nyújtók mögött is, de pont ők azok
az emberek, akik átérzik milyen nehéz segítséget kérni, milyen nehéz a legféltettebb
gondolatainkról beszélni és megnyílni egy másik ember előtt. De éppen ezen tapasztalatok
megélése, és megoldásai nélkül, nem lennének hiteles segítők.
A coaching nem csak tudásátadásról szól, hanem másfajta megközelítési módot is kínál a
gyermekek és a szülők támogatásához. Mások fejlődése és boldogsága a legnemesebb
ösztönzés/motiváció számomra. Folyamatos igényem van a tanulás és fejlődés iránt.
Tudatosan figyelek a további ismeretszerzésre, soha nem érzem, hogy már eleget tudnék.
Jelenleg is tanulok, hogy újabb és újabb ismeretekkel, és módszerekkel bővítsem tudásomat.
Örömömre szolgál, hogy a megszerzett tudásommal a hozzám forduló szülőket és
gyermekeket segíteni tudom, valamint a változás folyamatában végig mellettük lehetek.
            </p>
          </div>
          <div className={sectionImageStyle}>
            <Carousel images={aboutContent.carouselData.entries} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About;