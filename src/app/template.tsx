'use client'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '../components/ui/resizable'

type Props = {
  children: ReactNode
}

export default function HomeTemplate({ children }: Props) {
  const pathname = usePathname()

  const menu = [
    {
      id: 1,
      title: 'About me',
      imgSrc: '/assets/img/menu/menu1.png',
      href: '/'
    },
    {
      id: 2,
      title: 'Experience 1',
      imgSrc: '/assets/img/menu/menu2.png',
      href: '/experiences/freelance'
    },
    {
      id: 3,
      title: 'Experience 2',
      imgSrc: '/assets/img/menu/menu3.png',
      href: '/experiences/lead-developer'
    },
    {
      id: 4,
      title: 'Experience 3',
      imgSrc: '/assets/img/menu/menu4.png',
      href: '/experiences/software-engineer'
    },
    {
      id: 5,
      title: 'Education',
      imgSrc: '/assets/img/menu/menu5.png',
      href: '/educations/esmia'
    },
    {
      id: 6,
      title: 'Skills',
      imgSrc: '/assets/img/menu/menu6.png',
      href: '/skills/'
    },
    {
      id: 7,
      title: 'Want to talk?',
      imgSrc: '/assets/img/menu/menu7.png',
      href: '/contact/'
    }
  ]
  return (
    <main className="h-screen w-screen">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          defaultSize={15}
          minSize={15}
          maxSize={15}
          className="Menu grow overflow-y-scroll overflow-x-hidden w-fit">
          <ScrollArea>
            <nav className="w-full">
              <ol className="w-full p-4 flex flex-col gap-4">
                {menu.map((m, key) => (
                  <li key={key} title={m.title}>
                    <Link href={m.href} className="flex gap-2">
                      <small>{m.id}</small>
                      <figure>
                        <Image
                          src={m.imgSrc}
                          width={125}
                          height={125}
                          alt={m.title}
                          className={`border-2 ${
                            m.href === pathname
                              ? 'border-slate-800'
                              : 'border-transparent'
                          } hover:border-slate-500`}
                        />
                      </figure>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="Main grow overflow-hidden flex min-h-screen items-center justify-center px-24">
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  )
}
