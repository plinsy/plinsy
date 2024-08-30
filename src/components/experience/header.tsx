import Avatar from '../avatars/me'

type Props = {}

const ExperienceHeader = (props: Props) => {
  const name = 'AN TSIMANARSON Princy'
  const phoneNumber = '+261 34 77 393 05'
  const email = 'plinsy2@gmail.com'

  return (
    <>
      <header className="bg-black text-white py-4 px-2">
        <div className="flex">
          <Avatar size="sm" />
          <div className="flex flex-col p-4 gap-3">
            <div className="Name">{name}</div>
            <div className="flex gap-2">
              <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              <span>|</span>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default ExperienceHeader
