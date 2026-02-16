import { HeaderCreatePost } from './headerCreatePost'
import { Stories } from './stories'
import { ShowPosts } from './showPosts'
import { useUserData } from '@/hooks/useUserData'

export const Main = () => {

  const { userData } = useUserData()

  return (
    <main className="flex flex-col gap-6 p-4 bg-gray-100">

      <HeaderCreatePost userData={userData} />

      <Stories userData={userData} />

      <ShowPosts />
      
    </main>
  )
}