'use client'

import { ReactNode, useEffect, useRef } from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '../../components/ui/resizable'
import SidebarTemplate from './sidebar/template'

type Props = {
  children: ReactNode
}

const MainTemplate = ({ children }: Props) => {
  const main = useRef<HTMLElement>(null)
  const mainSection = useRef<HTMLElement>(null)

  function handleKeyUp(event: KeyboardEvent): void {
    event.preventDefault()
    const key = event.key
    if (key === 'F5') {
      mainSection.current?.requestFullscreen()
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keyup', (ev) => {})
    }
  }, [])

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
          <SidebarTemplate />
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

export default MainTemplate
