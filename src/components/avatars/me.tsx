type Props = {
  as?: 'img' | 'bg'
  size?: 'sm' | 'md'
}

const sizes = {
  sm: 'w-24 h-24',
  md: 'w-40 h-40'
}

const Avatar = ({ as = 'img', size = 'md' }: Props) => {
  return (
    <>
      <figure
        className={`bg-[url(/assets/img/me.png)] bg-cover ${sizes[size]}`}></figure>
    </>
  )
}

export default Avatar
