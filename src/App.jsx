
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login'
import ProfileEditPage from './pages/EditProfile'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<LoginPage />} />
          <Route path='/edit-profile' element={<ProfileEditPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
