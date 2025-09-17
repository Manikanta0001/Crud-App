import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle.jsx'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">CRUD Blog App</h1>
        <nav className="flex items-center space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/create" className="hover:underline">Create Post</Link>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  )
}

export default Header