import {
  Avatar,
  IconButton,
  Typography,
  makeStyles,
  useMediaQuery,
} from '@material-ui/core'
import { Delete } from '@mui/icons-material'
import React from 'react'

const QueuedSongList = () => {
  const graterThanMd = useMediaQuery((theme) => theme.breakpoints.up('md'))

  const song = {
    title: 'ABC',
    artist: 'Moon',
    thumbnail:
      'https://images.unsplash.com/photo-1636640157099-a67767c2cd35?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
  }

  return (
    graterThanMd && (
      <div style={{ margin: '10px 0' }}>
        <Typography color="textSecondary" variant="button">
          QUEUE (5)
        </Typography>
        {Array.from({ length: 5 }, () => song).map((song, i) => (
          <QueuedSong key={i} song={song} />
        ))}
      </div>
    )
  )
}

const useStyles = makeStyles({
  avatar: {
    height: 44,
    width: 44,
  },
  text: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  container: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: '50px auto 50px',
    gridGap: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  songInforContainer: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
})

function QueuedSong({ song }) {
  const classes = useStyles()
  const { artist, thumbnail, title } = song

  return (
    <div className={classes.container}>
      <Avatar className={classes.avatar} src={thumbnail} alt="song Thubnail" />
      <div>
        <Typography className={classes.text} variant="subtitle2">
          {title}
        </Typography>
        <Typography className={classes.text} variant="subtitle2">
          {artist}
        </Typography>
      </div>
      <IconButton>
        <Delete color="error" />
      </IconButton>
    </div>
  )
}

export default QueuedSongList
