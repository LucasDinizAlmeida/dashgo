import { useQuery, UseQueryOptions, UseQueryResult } from "react-query"
import { api } from "../api"

interface User {
  id: string,
  name: string,
  email: string,
  createAt: string
}

export interface GetUserProps {
  users: User[],
  totalCount: number
}

export async function getUsers(page: number): Promise<GetUserProps> {
  const { data, headers } = await api('users', {
    params: {
      page
    }
  })

  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createAt: new Date(user.createAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  const totalCount = Number(headers['x-total-count'])


  return {
    users,
    totalCount
  }
}


export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 //1 min
  }) as UseQueryResult<GetUserProps, unknown>
}
// export function useUsers(page: number, options?: UseQueryOptions) {
//   return useQuery(['users', page], () => getUsers(page), {
//     staleTime: 1000 * 60, //1 min
//     ...options
//   }) as UseQueryResult<GetUserProps, unknown>
// }