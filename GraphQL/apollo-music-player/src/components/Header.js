import { AppBar, makeStyles } from '@material-ui/core'
import { HeadsetTwoTone } from '@mui/icons-material'
import { Toolbar, Typography } from '@mui/material'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <>
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <HeadsetTwoTone />
          <Typography className={classes.title} variant="h6" component="h1">
            Apollo Music Player
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
