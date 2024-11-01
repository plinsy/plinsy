'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useStatic } from '../../../providers/static.providers'

type Props = {}

const SidebarTemplate = (props: Props) => {
  const pathname = usePathname()
  const [url, setUrl] = useState(pathname)
  const { menu } = useStatic()
  const { replace } = useRouter()

  const goBack = () => {
    const _item = menu.filter((m) => m.href === url)[0]
    if (_item) {
      const _prevItem = menu.filter(
        (m) => m.id === Math.max(_item?.id - 1, 1)
      )[0]
      const href = _prevItem.href
      if (href !== url) {
        replace(href)
      }
    }
  }

  const goForward = () => {
    const _item = menu.filter((m) => m.href === url)[0]
    if (_item) {
      const _nextItem = menu.filter(
        (m) => m.id === Math.min(_item?.id + 1, 7)
      )[0]
      const href = _nextItem.href
      if (href !== url) {
        replace(href)
      }
    }
  }

  const handleKeyDown = (event: KeyboardEvent): void => {
    event.preventDefault()
    const key = event.key
    if (key === 'ArrowRight' || key === 'ArrowDown') {
      goForward()
    } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
      goBack()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', (ev) => {
      handleKeyDown(ev)
    })

    return () => {
      document.removeEventListener('keydown', (ev) => {})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setUrl(pathname)

    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
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
                    m.href === url ? 'border-slate-800' : 'border-transparent'
                  } hover:border-slate-500`}
                />
              </figure>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default SidebarTemplate
