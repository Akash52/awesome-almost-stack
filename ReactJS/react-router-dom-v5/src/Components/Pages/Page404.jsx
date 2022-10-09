import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className="page">
      <h1>404</h1>
      <button>
        <Link to="/">Go to Home!</Link>
      </button>
    </div>
  )
}

export default Page404
