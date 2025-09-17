import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const PostsContext = createContext()

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const API_URL = 'https://jsonplaceholder.typicode.com/posts'

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const response = await axios.get(API_URL)
      setPosts(response.data)
    } catch (error) {
      toast.error('Failed to fetch posts')
    } finally {
      setLoading(false)
    }
  }

  const createPost = async (post) => {
    try {
      const response = await axios.post(API_URL, post)
      setPosts([response.data, ...posts])
      toast.success('Post created successfully')
    } catch (error) {
      toast.error('Failed to create post')
    }
  }

  const updatePost = async (id, updatedPost) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedPost)
      setPosts(posts.map((post) => (post.id === id ? response.data : post)))
      toast.success('Post updated successfully')
    } catch (error) {
      toast.error('Failed to update post')
    }
  }

  const deletePost = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`)
      setPosts(posts.filter((post) => post.id !== id))
      toast.success('Post deleted successfully')
    } catch (error) {
      toast.error('Failed to delete post')
    }
  }

  return (
    <PostsContext.Provider value={{ posts, loading, createPost, updatePost, deletePost, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}

export default PostsContext