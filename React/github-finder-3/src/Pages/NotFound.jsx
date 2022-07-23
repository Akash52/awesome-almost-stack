import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Oops 🙊</h1>
          <h1 className="mt-2 mb-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            I think you’re lost.
          </h1>
          <Link to="/" className="btn btn-primary btn-lg">
            <FaHome className="mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  )
}
