import Image from 'next/image'

type Props = {
    src: string
}

const Icon = ({src}: Props) => {
  return (
    <>
      <figure>
        <Image
          src={src}
          width={24}
          height={24}
          alt=""
        />
      </figure>
    </>
  )
}

export default Icon