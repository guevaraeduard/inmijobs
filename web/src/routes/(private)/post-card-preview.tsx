import { createFileRoute } from '@tanstack/react-router'
import PostCard from '@/components/post/PostCard'

export const Route = createFileRoute('/(private)/post-card-preview')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PostCard />
)
}
