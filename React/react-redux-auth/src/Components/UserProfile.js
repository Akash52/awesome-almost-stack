/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  userDetailsAction,
  userLogoutAction,
} from '../Redux/Actions/userAction'

const UserProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userInfo = useSelector((state) => state.userDetails)
  const { user, loading } = userInfo

  useEffect(() => {
    dispatch(userDetailsAction())
  }, [])

  const handleLogout = () => {
    dispatch(userLogoutAction())
    navigate('/register')
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container">
      <h1>User Profile</h1>
      <img src={user?.image} alt="user" />
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Phone No: {user?.phoneNo}</p>
      <p>Password: {user?.password}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserProfile
