import React, { FC, Props, useRef, useEffect } from 'react'

const NavBar: FC<{ activePageIndex: number }> = ({ children, activePageIndex }) => {

  const grayStyle = "hover:text-interactive flex items-center px-3  rounded-md font-medium transition-colors duration-500";
  const activeStyle = "text-active  px-3  rounded-md  font-medium";

  const getNavDivStyle = (index: number) => {
    if (activePageIndex === index) {
      return 'flex items-center text-center border-active border-b-4'
    } else {
      return 'flex items-center text-center border-interactive border-b-4'
    }
  }

  const pages = [
    {
      title: "Főoldal",
      href: "/",
      ref: useRef<HTMLDivElement>(null)
    },
    {
      title: "Rólam",
      href: "/rolam",
      ref: useRef<HTMLDivElement>(null)
    },
    {
      title: "Coaching",
      href: "/coach",
      ref: useRef<HTMLDivElement>(null)
    },
    {
      title: "Iskola előkésztő",
      href: "/iskola",
      ref: useRef<HTMLDivElement>(null)
    },
    {
      title: "Kapcsolat",
      href: "/kapcsolat",
      ref: useRef<HTMLDivElement>(null)
    }
  ]

  useEffect(() => {
    const navRef = pages[activePageIndex];
    if (navRef && navRef.ref && navRef.ref.current) {
      navRef.ref.current.scrollIntoView();
      const x = navRef.ref.current.getBoundingClientRect().right;
      window.scrollTo({ left: x, behavior: 'smooth' });
    }
  }, []);

  return (
    <nav className="w-full bg-white shadow sticky top-0 z-50">
      <div className="flex items-strech justify-center h-full min-h-[7vh] overflow-x-auto w-100">
        <div  className="flex items-strech  max-w-full">
          {pages.map((page, i) => {
            return (
              <div key={i} ref={page.ref} className={getNavDivStyle(i)}>
                <a className={activePageIndex === i ? activeStyle : grayStyle} href={page.href}>
                  {page.title}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
