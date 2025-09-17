import { useContext } from 'react'
import PostsContext from '../contexts/PostsContext.jsx'
import PostCard from '../components/Postcard.jsx'
import LoadingSpinner from '../components/LoadingSpinner.jsx'

const Home = () => {
  const { posts, loading } = useContext(PostsContext)

  if (loading) return <LoadingSpinner />

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Home