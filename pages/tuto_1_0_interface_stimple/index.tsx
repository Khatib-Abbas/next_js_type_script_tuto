import * as React from 'react'

export default function Index(): JSX.Element {
  interface IUser {
    firstName: string
    lastName: string
  }
  const user: IUser = {
    firstName: 'abbas',
    lastName: 'khatib',
  }
  return (
    <>
      {user.firstName} - {user.lastName}
    </>
  )
}
