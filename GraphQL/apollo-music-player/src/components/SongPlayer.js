import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Slider,
  Typography,
  makeStyles,
} from '@material-ui/core'
import { PlayArrow, SkipNext, SkipPrevious } from '@mui/icons-material'
import React from 'react'
import QueuedSongList from './QueuedSongList'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 15px',
  },
  content: {
    flex: '1 0 auto',
  },
  thumbnail: {
    width: 150,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}))

const SongPlayer = () => {
  const classes = useStyles()
  return (
    <>
      <Card variant="outlined" className={classes.container}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="h5" component="h3">
              Title
            </Typography>
            <Typography variant="subtitle1" component="p" color="textSecondary">
              Artist
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton>
              <SkipPrevious />
            </IconButton>
            <IconButton>
              <PlayArrow className={classes.playIcon} />
            </IconButton>
            <IconButton>
              <SkipNext />
            </IconButton>
            <Typography variant="subtitle1" component="p" color="textSecondary">
              00:01:30
            </Typography>
          </div>
          <Slider type="range" min={0} max={1} step={0.01} />
        </div>
        <CardMedia
          className={classes.thumbnail}
          image="https://images.unsplash.com/photo-1636640157099-a67767c2cd35?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </Card>
      <QueuedSongList />
    </>
  )
}

export default SongPlayer
