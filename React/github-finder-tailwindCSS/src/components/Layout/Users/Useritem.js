import React from 'react'
import { Link } from 'react-router-dom'

const Useritem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="w-full p-5 px-4 mb-6 transition duration-500 transform md:w-6/12 xl:4/12 lg:w-4/12 lg:mb-0 hover:scale-110">
      <div className="max-w-md px-8 py-4 my-2 bg-gray-800 rounded-lg shadow-lg">
        <div className="px-6">
          <img
            alt="..."
            src={avatar_url}
            className="max-w-full mx-auto transition-opacity duration-500 ease-in rounded-full shadow-xl hover:opacity-80"
            style={{ maxWidth: '150px' }}
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold text-gray-400">{login}</h5>
            <div className="mt-6">
              <button
                className="px-8 py-3 mb-1 mr-1 text-base font-bold text-gray-300 uppercase transition-all duration-150 ease-in bg-blue-700 rounded-full shadow-md outline-none hover:shadow-lg focus:outline-none hover:bg-blue-600 "
                type="button"
              >
                <Link to={`/user/${login}`}>More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Useritem
