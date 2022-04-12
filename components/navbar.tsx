import React, { FC, Props } from 'react'


const NavBar: FC<{ activePageIndex: number }> = ({ children, activePageIndex }) => {

  const grayStyle = "hover:text-interactive px-3 py-2 rounded-md font-medium transition-colors duration-500";
  const activeStyle = "text-active  px-3 py-2 rounded-md  font-medium";

  const getNavDivStyle = (index:number) => {
    if(activePageIndex === index){
      return 'flex items-center text-center border-active border-b-4'
    } else {
      return 'flex items-center text-center border-interactive border-b-4'
    }
  }

  return (
    <nav className="w-full bg-white shadow sticky top-0 z-50 min-h-[7vh]">
      <div>
        <div className="flex items-center  justify-center h-16 w-full">
          <div className=" flex items-center justify-center  overflow-x-auto w-100">
            <div className="flex items-strech  max-w-full">
              <div className={getNavDivStyle(0)}>
                <a className={activePageIndex === 0 ? activeStyle : grayStyle} href="/#">
                  Főoldal
                </a>
              </div>
              <div className={getNavDivStyle(1)}>
                <a className={activePageIndex === 1 ? activeStyle : grayStyle} href="/about">
                  Rólam
                </a>
              </div>
              <div className={getNavDivStyle(2)}>
                <a className={activePageIndex === 2 ? activeStyle : grayStyle} href="/coach">
                  Coaching
                </a>
              </div>
              <div className={getNavDivStyle(3)}>
                <a className={activePageIndex === 3 ? activeStyle : grayStyle} href="/#">
                  Iskola előkészitő
                </a>
              </div>
              <div className={getNavDivStyle(4)}>
                <a className={activePageIndex === 4 ? activeStyle : grayStyle} href="/#">
                  Kapcsolat
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default NavBar
