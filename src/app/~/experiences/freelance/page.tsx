import ExperienceCard from '../../../../components/experience/card'

type Props = {}

const Page = (props: Props) => {
  const description = `With a very good friend of mine, I started working on different web projects from numerous clients from Europa. Our priority is to provide a quality product in time. 
        My job was to interpret the client needs, develop corresponding solutions and maintaining existing applications.
        I often work with a team with product owners, designers and developers.
        And sometimes, I manage projects by my own from scratch.
        We use tools depending on every projects needs, so I’ve mastered many of them by the way. You can see most of them in the next section. I mainly use Python, Nodejs, ReactJS and TypeScript.
    `
  return (
    <ExperienceCard
      dateRange="2019 - Today"
      jobTitle="Freelance"
      description={description}
    />
  )
}

export default Page
