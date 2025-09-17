import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Home from '../pages/Home.jsx'
import CreatePost from '../pages/CreatePost.jsx'
import EditPost from '../pages/EditPost.jsx'

const AppRoutes = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default AppRoutes