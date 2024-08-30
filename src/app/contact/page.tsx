import Image from 'next/image'
import MainCard from '../../components/ui/cards/main-card'

type Props = {}

const ContactPage = (props: Props) => {
  const email = 'plinsy2@gmail.com'
  const phoneNumber = '+261347739305'
  const website = 'https://plinsy.krohy.mg'
  const networks = [
    {
      imgSrc: 'facebook.png',
      alt: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61564656916193'
    },
    {
      imgSrc: 'linkedin.png',
      alt: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tsimanarson-princy-a-n-462b83177/'
    },
    {
      imgSrc: 'github.png',
      alt: 'GitHub',
      href: 'https://github.com/plinsy'
    },
    {
      imgSrc: 'whatsapp.png',
      alt: 'WhatsApp',
      href: `https://api.whatsapp.com/send?phone=${phoneNumber}`
    }
  ]

  return (
    <>
      <MainCard orientation="RH">
        <hr />
        <div className="flex flex-col justify-center items-center gap-4 py-36">
          <h1 className="MainTitle text-4xl">Ready to talk?</h1>
          <section className="flex gap-4">
            <a href={`mailto:${email}`}>{email}</a>
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            <a href={`${website}`}>{website}</a>
          </section>
          <section className="grid grid-cols-4 gap-4">
            {networks.map((network, index) => (
              <a
                key={index}
                href={network.href}
                target="_blank"
                rel="noopener noreferrer">
                <Image
                  src={`/assets/img/icons/${network.imgSrc}`}
                  alt={network.alt}
                  width={45}
                  height={45}
                  className="w-12 h-12"
                />
              </a>
            ))}
          </section>
        </div>
        <hr />
      </MainCard>
    </>
  )
}

export default ContactPage
