import React, { Fragment } from 'react'
import Search from '../layout/users/Search'
import Users from '../layout/users/Users'

export const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  )
}

export default Home
