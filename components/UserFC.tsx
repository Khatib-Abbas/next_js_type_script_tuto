import * as React from 'react'
import { FC } from 'react'
interface IUser {
  firstName: string
  lastName: string
}
const Index: FC<IUser> = ({ lastName, firstName }): JSX.Element => {
  return <>{lastName + firstName}</>
}
export default Index
