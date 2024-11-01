import ExperienceCard from '../../../../components/experience/card'

type Props = {}

const Page = (props: Props) => {
  const description = (
    <>
      <div className="flex flex-col gap-4">
        <div>
          My top projects
          <ul className="list-disc pl-16 pr-24">
            <li>
              Development of a platform game with players automated with
              Artificial Intelligences (ReactJS, Typescript)
            </li>
            <li>
              Development of a platform to improve the visibility of Malagasy
              researchers and their work (Django, NextJS)
            </li>
          </ul>
        </div>
        <p>
          Title of my bachelor Thesis : “Creation of a platform to improve the
          visibility of Malagasy Researchers”
        </p>
      </div>
    </>
  )
  return (
    <ExperienceCard
      mainIcon="education-ico.png"
      mainTitle="Education"
      dateRange="Nov 2021 - 2024"
      jobTitle="Bachelor in Applied Informatics"
      description={description}
      location="ESMIA, MAHAMASINA, ANTANANARIVO"
    />
  )
}

export default Page
