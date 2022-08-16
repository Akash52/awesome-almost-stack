import { useQuery } from '@apollo/react-hooks'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
  makeStyles,
} from '@material-ui/core'
import { PlayArrow, Save } from '@mui/icons-material'
import React from 'react'
import { GET_SONGS } from './../graphql/queries'

const SongList = () => {
  const { data, loading, error } = useQuery(GET_SONGS)

  // const song = {
  //   title: 'ABC',
  //   artist: 'Moon',
  //   thumbnail:
  //     'https://images.unsplash.com/photo-1636640157099-a67767c2cd35?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
  // }

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 50,
        }}
      >
        <CircularProgress />
      </div>
    )
  }

  if (error) return <div>Error fetching songs</div>

  return (
    <div>
      {data.songs.map((song) => (
        <Song key={song.id} song={song} />
      ))}
      {/* {' '}
      {Array.from({ length: 10 }, () => song).map((song, i) => (
        <Song key={i} song={song} />
      ))}{' '} */}
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(3),
  },
  songInfoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  songInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  thumbnail: {
    objectFit: 'cover',
    width: 140,
    height: 140,
  },
}))

function Song({ song }) {
  const classes = useStyles()
  const { title, thumbnail, artist } = song
  return (
    <Card className={classes.container}>
      <div className={classes.songInfo}>
        <CardMedia className={classes.thumbnail} image={thumbnail} />
        <div className={classes.songInfo}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              component="p"
              color="textSecondary"
            >
              {artist}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton size="small" color="primary">
              <PlayArrow />
            </IconButton>
            <IconButton size="small" color="primary">
              <Save />
            </IconButton>
          </CardActions>
        </div>
      </div>
    </Card>
  )
}

export default SongList
