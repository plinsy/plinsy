import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  orientation?: "H" | "V"
}

const mainCardOrientations = {
  H: 'flex-row',
  V: 'flex-col'
}

const colorsOrientations = {
  H: 'flex-col',
  V: 'flex-row'
}

const MainCard = ({ children, orientation = "H" }: Props) => {
  return (
    <>
      <section
        className={`MainCard flex ${mainCardOrientations[orientation]} border-[#C6C6C6] border bg-[#FFF8F3] w-full`}>
        <aside className={`Colors flex ${colorsOrientations[orientation]}`}>
          <div className="Color grow bg-[#264394] p-2"></div>
          <div className="Color grow bg-[#EF99A7] p-2"></div>
          <div className="Color grow bg-[#D69067] p-2"></div>
          <div className="Color grow bg-[#B7AFAD] p-2"></div>
        </aside>
        <aside className="MainContent grow flex flex-col justify-between p-8">
          {children}
        </aside>
      </section>
    </>
  )
}

export default MainCard
