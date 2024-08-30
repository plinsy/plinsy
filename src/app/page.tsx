import Avatar from '../components/avatars/me'
import MainCard from '../components/ui/cards/main-card'

type Props = {}

const HomePage = (props: Props) => {
  const email = 'plinsy2@gmail.com'
  const phoneNumber = '+261347739305'

  return (
    <>
      <MainCard>
        <h1 className="MainTitle text-end">_AN TSIMANARSON PRINCY</h1>
        <hr />
        <section className="flex flex-col gap-8">
          <Avatar />
          <p className="Headline px-8">
            I am a curious software engineer with an unconventional background
            and multiple acquired skills, especially in JavaScript and Python. I
            am gradually familiarizing myself with the world of artificial
            intelligence and machine learning. Take a look at what I can do.
          </p>
          <div className="Contacts flex flex-col gap-3 px-8">
            <a href={`mailto:${email}`} className=" underline text-gray-600">
              Email me
            </a>
            <a href={`tel:${phoneNumber}`}>Give me a call</a>
            <a href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}>
              Or WhatsApp me
            </a>
          </div>
        </section>
        <hr />
      </MainCard>
    </>
  )
}

export default HomePage
