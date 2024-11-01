'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, useEffect, useRef, useState } from 'react'
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
  const [url, setUrl] = useState(pathname)
  const { replace } = useRouter()
  const main = useRef<HTMLElement>(null)
  const mainSection = useRef<HTMLElement>(null)

  const menu = [
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

  const goBack = () => {
    const _item = menu.filter((m) => m.href === url)[0]
    if (_item) {
      const _prevItem = menu.filter(
        (m) => m.id === Math.max(_item?.id - 1, 1)
      )[0]
      _prevItem
      const href = _prevItem.href
      if (href !== url) {
        setUrl(href)
      }
    }
  }

  const goForward = () => {
    const _item = menu.filter((m) => m.href === url)[0]
    if (_item) {
      const _nextItem = menu.filter(
        (m) => m.id === Math.min(_item?.id + 1, 7)
      )[0]
      _nextItem
      const href = _nextItem.href
      if (href !== url) {
        setUrl(href)
      }
    }
  }

  const listen = () => {
    document.addEventListener('keydown', (ev) => {
      handleKeyDown(ev)
    })
  }

  const handleKeyDown = (event: KeyboardEvent): void => {
    event.preventDefault()
    const key = event.key
    if (key === 'ArrowRight' || key === 'ArrowDown') {
      goForward()
    } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
      goBack()
    } else if (key === 'F5') {
      mainSection.current?.requestFullscreen()
    }
  }

  useEffect(() => {
    if (url) {
      replace(url)
      document.removeEventListener('keydown', (ev) => {})
      listen()
    }

    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return (
    <main
      ref={main}
      onContextMenu={(e) => e.preventDefault()}
      className="h-screen w-screen relative">
      <ResizablePanelGroup direction="horizontal" className="w-full flex">
        <ResizablePanel
          defaultSize={18}
          minSize={18}
          maxSize={18}
          className="Menu grow overflow-hidden w-full h-full">
          <nav className="w-full h-full overflow-y-scroll">
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
                          m.href === url
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
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={85}
          minSize={85}
          maxSize={85}
          className="Main">
          <section
            ref={mainSection}
            className="flex items-center justify-center align-middle px-24 h-full">
            {children}
          </section>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  )
}
