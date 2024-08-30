import ExperienceCard from '../../../components/experience/card'

type Props = {}

const Page = (props: Props) => {
  const description = `As a sophomore at ESMIA University, I actively sought to expand my technical skills by participating in an internal project for an internship. Collaborating closely with a team of seven, we successfully developed a comprehensive platform designed to centralize and streamline the flow of information across various departments within the university. Our solution leveraged robust technologies, including MySQL for the database management system, Node.js and Express for the backend, and Flutter for the frontend development, ensuring a seamless and efficient user experience. This project not only honed my technical abilities but also deepened my understanding of teamwork, project management, and the practical application of software development in a real-world educational environment.`
  return (
    <ExperienceCard
      dateRange="April 2023 - Sept 2023"
      jobTitle="Intern as Software Developer"
      description={description}
      location="ESMIA, MAHAMASINA, ANTANANARIVO"
    />
  )
}

export default Page
