import * as React from 'react'
//https://nextjs.org/docs/api-reference/next/router
import { Button } from '@material-ui/core'
import { useRouter } from 'next/router'

const Index = (): JSX.Element => {
  const router = useRouter()
  return (
    <>
      <Button onClick={() => router.push('/tuto_5.0_images')}> vers le tuto image</Button>
    </>
  )
}
export default Index
