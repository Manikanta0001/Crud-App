import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import PostsContext from '../contexts/PostsContext.jsx'
import PostForm from '../components/PostForm.jsx'
import LoadingSpinner from '../components/LoadingSpinner.jsx'
import toast from 'react-hot-toast'

const EditPost = () => {
  const { id } = useParams()
  const { updatePost } = useContext(PostsContext)
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        setPost(response.data)
      } catch (error) {
        toast.error('Failed to fetch post')
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [id])

  const onSubmit = (data) => {
    updatePost(id, { ...data, userId: post.userId })
    navigate('/')
  }

  if (loading) return <LoadingSpinner />
  if (!post) return <p>Post not found</p>

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <PostForm onSubmit={onSubmit} defaultValues={post} submitText="Update Post" />
      
    </div>
  )
}

export default EditPost