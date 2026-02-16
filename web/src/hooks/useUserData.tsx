import { createContext, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getUserData } from '@/services/api/user/getUserData'
import type { UserModel } from '@/models/UserModel'

interface UserDataContextType {
  userData: UserModel | undefined
  error: Error
  isLoading: boolean
}

const UserDataContext = createContext<UserDataContextType | undefined>(undefined)

interface UserDataProviderProps {
  children: React.ReactNode
  userId?: string
}

export function UserDataProvider({ children, userId = '2' }: UserDataProviderProps) {
  const { data: userData, error, isLoading } = useQuery<UserModel | undefined>({
    queryKey: ['userData', userId],
    queryFn: () => getUserData(userId),
    staleTime: 5 * 60 * 1000, // 5 minutos
  })

  console.log('UserDataProvider - userData:', userData)

  const value: UserDataContextType = {
    userData,
    error: error as Error ,
    isLoading,
  }

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  )
}

export function useUserData() {
  const context = useContext(UserDataContext)
  if (context === undefined) {
    throw new Error(
      'useUserData debe ser usado dentro de un UserDataProvider'
    )
  }
  return context
}
