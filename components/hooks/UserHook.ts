import useSWR from 'swr'
import User from '../entities/User'
export function useUser() {
  const { data, mutate, error } = useSWR(
    'user',
    async () => {
      return User.getAllStudents()
    },
    {}
  )
  return {
    users: data,
    isLoadingUser: !error && !data,
    mutateUser: mutate,
  }
}
