import * as React from 'react'
import { useUser } from '../../components/hooks/UserHook'
interface IUser {
  id: string
  username: string
}
const Index = (): JSX.Element => {
  const { users, isLoadingUser } = useUser()
  return (
    <>
      <>
        {!isLoadingUser &&
          users.map((value: IUser, index: number) => {
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
