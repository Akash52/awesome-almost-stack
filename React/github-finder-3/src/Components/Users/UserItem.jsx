import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user }) => {
  const { login, avatar_url } = user
  return (
    <div className="card shadow-md compact side bg-base-100 transition duration-500 transform hover:bg-base-200 hover:scale-110">
      <div className="flex-row items-center space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full shadow w-14 h-14">
            <img src={avatar_url} alt="Profile" />
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserItem
