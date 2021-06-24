import * as React from 'react'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
interface IUser {
  id: string
  username: string
}
const Id = ({ user }: { user: IUser }): JSX.Element => {
  console.log(user)
  return (
    <>
      {user.id} - username : {user.username}
    </>
  )
}
export default Id

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  // En retournant { props: { posts } }, le comoinent Blog
  const paths = response.data.map((user: IUser) => ({
    params: { id: user.id.toString() },
  }))
  // Nous ne pré-rendrons que ces chemins au moment de la construction.
  // { fallback: false } veut dire que seulement les id (path) connu seront affiché sinon on affiche une page 404.
  return { paths, fallback: false }
}
// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    // Pass post data to the page via props
    return { props: { user: response.data } }
  }
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
}
