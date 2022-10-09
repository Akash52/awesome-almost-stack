import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import User from './components/Layout/Users/User'
import About from './components/Pages/About'
import Login from './components/Pages/Login'
import Users from './components/Layout/Users/Users'
import GithubState from './Context/Github/GithubState'

const App = () => {
  return (
    <GithubState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <div className="container px-4 mx-auto"> */}
          <Route exact path="/" element={<Users />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/user/:login" element={<User />} />
          {/* </div> */}
        </Routes>
      </BrowserRouter>
    </GithubState>
  )
}

export default App
