import * as React from 'react'
import Image from 'next/image'
//https://nextjs.org/docs/api-reference/next/image
const Index = (): JSX.Element => {
  return (
    <>
      <Image
        src={'/medias/maker/blog-maker.png'}
        alt="Picture of the author"
        width={400}
        height={180}
      />
    </>
  )
}
export default Index
