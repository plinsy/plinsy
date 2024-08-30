import Image from 'next/image'
import MainCard from '../../components/ui/cards/main-card'

type Props = {}

const SkillsPage = (props: Props) => {
  const email = 'plinsy2@gmail.com'
  const phoneNumber = '+261347739305'
  const skills = [
    'nodejs',
    'react',
    'typescript',
    'react-native',
    'git',
    'trello',
    'github-ci',
    'mistral-ai',
    'python',
    'django',
    'ruby',
    'java',
    'nextjs',
    'render',
    'vercel',
    'vscode',
    'windesign',
    'php'
  ]

  return (
    <>
      <MainCard>
        <hr />
        <h1 className="MainTitle">Technical skills</h1>
        <section className="grid grid-cols-4 gap-8 px-36 py-4">
          {skills.map((skill, key) => (
            <figure>
              <Image
                src={`/assets/img/icons/${skill}.png`}
                width={75}
                height={75}
                alt={skill}
              />
            </figure>
          ))}
        </section>
        <hr />
      </MainCard>
    </>
  )
}

export default SkillsPage
