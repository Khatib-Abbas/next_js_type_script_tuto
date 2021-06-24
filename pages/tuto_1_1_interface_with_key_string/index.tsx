import * as React from 'react'

export default function Index(): JSX.Element {
  interface IUser {
    firstName: string
    lastName: string
    [key: string]: any
  }
  const user: IUser = {
    fullName: 'abbas khatib',
    firstName: 'abbas',
    lastName: 'khatib',
  }
  return (
    <>
      {user.fullName} - {user.lastName}
    </>
  )
}
