import React, { FC, Props } from 'react'


const NavBar: FC<{activePageIndex:number}> = ({children, activePageIndex}) => {

    const grayStyle = "text-gray-400  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md font-medium transition-colors duration-200";
    const activeStyle = "text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md  font-medium";

    return (
        <nav className="w-full bg-white dark:bg-gray-800  shadow sticky top-0 z-50 h-[7vh]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center  h-16 w-full">
            <div className=" flex items-center justify-center  w-full">
            <div className="flex items-baseline space-x-4">
                  <a className={activePageIndex === 0 ? activeStyle: grayStyle} href="/#">
                    Főoldal
                  </a>
                  <a className={activePageIndex === 2 ? activeStyle: grayStyle} href="/about">
                    Rólam
                  </a>
                  <a className={activePageIndex === 1 ? activeStyle: grayStyle} href="/#">
                    Coaching
                  </a>
                  <a className={activePageIndex === 2 ? activeStyle: grayStyle} href="/#">
                    Iskola előkészitő
                  </a>
                  <a className={activePageIndex === 3 ? activeStyle: grayStyle} href="/#">
                    Kapcsolat
                  </a>
                </div>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default NavBar
