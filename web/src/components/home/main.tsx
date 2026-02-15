import { HeaderCreatePost } from './headerCreatePost'
import { Stories } from './stories'
import { ShowPosts } from './showPosts'

export const Main = () => {
  return (
    <main className="flex flex-col gap-6 p-4 bg-gray-100">

      <HeaderCreatePost />

      <Stories />

      <ShowPosts />
      
    </main>
  )
}