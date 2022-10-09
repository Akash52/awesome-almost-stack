import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const Private = () => {
  const userdata = localStorage.getItem('userInfo')

  return userdata ? <Outlet /> : <Navigate to="/register" />
}

export default Private
