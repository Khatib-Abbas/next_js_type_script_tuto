import useSWR from 'swr'
import axios from 'axios'
import * as React from 'react'
interface IUser {
  id: string
  username: string
}
const Index = (): JSX.Element => {
  const { data, error } = useSWR(
    'all-users',
    async () =>
      await axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.data)
  )

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <>
      <>
        {data &&
          data.map((value: IUser, index: number) => {
            return (
              <div key={index}>
                id: {value.id} - username : {value.username}
              </div>
            )
          })}
      </>
    </>
  )
}
export default Index
