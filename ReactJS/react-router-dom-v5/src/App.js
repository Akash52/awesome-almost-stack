import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/Pages/About'
import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'
import Help from './Components/Pages/Help'
import Page404 from './Components/Pages/Page404'
import Navbar from './Components/layout/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
