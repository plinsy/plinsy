import { ReactNode } from 'react'
import Icon from '../icons/icon'
import MainCard from '../ui/cards/main-card'
import ExperienceHeader from './header'

type Props = {
  mainIcon?: string
  mainTitle?: string
  jobTitle: string
  dateRange: string
  description: string | ReactNode
  location?: string
}

const ExperienceCard = ({
  mainIcon = 'experience-ico.png',
  mainTitle = 'Experience',
  dateRange,
  description,
  jobTitle,
  location
}: Props) => {
  return (
    <>
      <MainCard orientation="V">
        <div className="flex flex-col gap-4">
          <ExperienceHeader />
          <div className="Content">
            <div className="flex gap-2">
              <Icon src={`/assets/img/icons/${mainIcon}`} />
              <div className="flex flex-col gap-4">
                <h2 className="underline uppercase">{mainTitle}</h2>
                <div className="flex justify-between gap-4">
                  <span>{dateRange}</span>
                  <span className=" font-semibold">{jobTitle}</span>
                  <span className="Location text-slate-400">{location}</span>
                </div>
                <hr className="" />
              </div>
            </div>
            <p className="Description px-8 py-4">{description}</p>
          </div>
        </div>
      </MainCard>
    </>
  )
}

export default ExperienceCard
