import { PostsProvider } from './contexts/PostsContext.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

function App() {
  return (
    <PostsProvider>
      <AppRoutes />
    </PostsProvider>
  )
}

export default App