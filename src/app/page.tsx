'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Loading from './loading'

type Props = {}

const LayoutPage = (props: Props) => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/~/home')

    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Loading />
}

export default LayoutPage
