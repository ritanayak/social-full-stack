import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'

import Login from './pages/LoginPage'
import Register from './pages/RegisterPage'
import Feed from './pages/FeedPage'

import Navbar from './components/Navbar'

import { useUser } from './context/UserContext'

function App() {

  // bring in user info
  const { user } = useUser()

  return (
    <>

      <Navbar />

      {user ?
        <Routes>
          <Route path="/feed" element={<Feed />} />
          <Route path="*" element={<Navigate to="/feed" />} />
        </Routes>
        :
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />}  />
        </Routes>
      }


    </>
  )
}

export default App