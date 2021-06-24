import * as React from 'react'
import axios from 'axios'
import { GetServerSideProps } from 'next'
interface IUser {
  id: string
  username: string
}
export default function Index({ users }: { users: IUser[] }): JSX.Element {
  return (
    <>
      {users &&
        users.map((value: IUser, index: number) => {
          return (
            <div key={index}>
              id: {value.id} - username : {value.username}
            </div>
          )
        })}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  return { props: { users: response.data } }
}
