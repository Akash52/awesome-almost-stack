import React, { useContext, useState } from 'react'
import Spinner from '../Spinner'
import UserItem from './Useritem'
import GithubContext from '../../../Context/Github/githubContext'
import Search from './Search'
import Alert from './../Alert'

const Users = () => {
  const [alert, setAlert] = useState(null)

  const showAlert = (msg) => {
    setAlert({ msg })

    setTimeout(() => setAlert(null), 3000)
  }
  const githubContext = useContext(GithubContext)
  const { loading, users } = githubContext

  return (
    <>
      <Search setAlert={showAlert} />
      <div className="flex justify-center mt-3">
        <Alert alert={alert} />
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap p-3 mt-5">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  )
}

export default Users
