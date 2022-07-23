import React, { useState, useContext } from 'react'
import GithubContext from '../../../Context/Github/githubContext'
import Seaction from './../Seaction'

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext)
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      setAlert('Please Enter Something!')
    } else {
      githubContext.searchUsers(text)
      setText('')
    }
  }

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <Seaction />
      <form autoComplete="off" onSubmit={onSubmit}>
        <div className="flex justify-center m-3 ">
          <input
            className="relative w-1/2 p-2 text-white bg-gray-800 border-4 border-opacity-50 rounded-full placeholder-blueGray-500 text-blueGray-600 text-md border-light-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            name="text"
            type="search"
            placeholder="Search Users..."
            value={text}
            onChange={onChange}
          />
        </div>
      </form>
      {githubContext.users.length > 0 && (
        <div className="flex justify-center">
          <button
            className="px-3 py-2 font-semibold tracking-wider text-white uppercase bg-green-500 rounded hover:bg-blue-600 focus:outline-none opacity-70"
            onClick={githubContext.clearUsers}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default Search
