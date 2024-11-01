'use client'

import { createContext, ReactNode, useContext, useMemo } from 'react'

type IMenu = {
  id: number
  title: string
  imgSrc: string
  href: string
}

type IStaticContext = {
  menu: IMenu[]
}

type IStaticProviderProps = {
  children: ReactNode
}

const StaticContext = createContext<IStaticContext>({
  menu: []
})

const StaticProvider = ({ children }: IStaticProviderProps) => {
  const menu = useMemo(() => {
    return [
      {
        id: 1,
        title: 'About me',
        imgSrc: '/assets/img/menu/menu1.png',
        href: '/~/home'
      },
      {
        id: 2,
        title: 'Experience 1',
        imgSrc: '/assets/img/menu/menu2.png',
        href: '/~/experiences/freelance'
      },
      {
        id: 3,
        title: 'Experience 2',
        imgSrc: '/assets/img/menu/menu3.png',
        href: '/~/experiences/lead'
      },
      {
        id: 4,
        title: 'Experience 3',
        imgSrc: '/assets/img/menu/menu4.png',
        href: '/~/experiences/software'
      },
      {
        id: 5,
        title: 'Education',
        imgSrc: '/assets/img/menu/menu5.png',
        href: '/~/educations/esmia'
      },
      {
        id: 6,
        title: 'Skills',
        imgSrc: '/assets/img/menu/menu6.png',
        href: '/~/skills'
      },
      {
        id: 7,
        title: 'Want to talk?',
        imgSrc: '/assets/img/menu/menu7.png',
        href: '/~/contact'
      }
    ]
  }, [])

  return (
    <StaticContext.Provider value={{ menu }}>{children}</StaticContext.Provider>
  )
}

const useStatic = () => {
  return useContext(StaticContext)
}

export { StaticProvider, useStatic }
