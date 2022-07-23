import React from 'react'
import UserRegister from './Components/UserRegister'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserProfile from './Components/UserProfile'
import Private from './Layout/Private'
import NotFound from './Layout/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Private />}>
          <Route path="userProfile" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/register" element={<UserRegister />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
