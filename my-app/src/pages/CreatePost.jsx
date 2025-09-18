import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PostsContext from '../contexts/PostsContext.jsx'
import PostForm from '../components/PostForm.jsx'

const CreatePost = () => {
  const { createPost } = useContext(PostsContext)
  const navigate = useNavigate()

  const onSubmit = (data) => {
    createPost({ ...data, userId: 1 }) // userId is required by API
    navigate('/')
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
      <PostForm onSubmit={onSubmit} submitText="Create Post" />
    </div>
  )
}

export default CreatePost