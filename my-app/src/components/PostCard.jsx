import { Link } from 'react-router-dom'
import { useContext } from 'react'
import PostsContext from '../contexts/PostsContext.jsx'

const PostCard = ({ post }) => {
  const { deletePost } = useContext(PostsContext)

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{post.body.substring(0, 100)}...</p>
      <div className="flex space-x-2">
        <Link to={`/edit/${post.id}`} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
          Edit
        </Link>
        <button onClick={() => deletePost(post.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  )
}

export default PostCard