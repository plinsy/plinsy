import ExperienceCard from '../../../components/experience/card'

type Props = {}

const Page = (props: Props) => {
  const description = `As a final project for my Bachelor at ESMIA, I had an internship at CIDST Tsimbazaza in Antananarivo. After an interview with the chief of the department, we agreed about what they really need to update.
        That’s why I adopted this topic “Creation of a platform to improve the visibility of Malagasy Researchers”. We were a team of 6 on this project. So we have to structure the way of managing this project. So I naturally took the Lead of the team. We used Trello to follow the advancement of the project. We regularly discuss about how far we’ve gone in the project and what we need to improve. We mainly used Python, NextJS and PostgreSQL
    `
  return (
    <ExperienceCard
      dateRange="April 2024 - July 2024"
      jobTitle="Intern as Lead Developer"
      description={description}
      location="CIDST, TSIMBAZAZA, ANTANANARIVO"
    />
  )
}

export default Page
