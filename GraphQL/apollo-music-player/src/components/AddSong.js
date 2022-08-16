/* eslint-disable jsx-a11y/img-redundant-alt */
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  makeStyles,
} from '@material-ui/core'
import { AddBoxOutlined, Link } from '@mui/icons-material'
import { Button, InputAdornment } from '@mui/material'
import React from 'react'
import SoundcloudPlayer from 'react-player/lib/players/SoundCloud'
import YouTubePlayer from 'react-player/lib/players/YouTube'
import ReactPlayer from 'react-player'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10',
  },
  urlInput: {
    margin: theme.spacing(2),
  },
  addSongButton: {
    margin: theme.spacing(1),
  },
  dialog: {
    textAlign: 'center',
  },
  thumbnail: {
    width: '90%',
  },
}))

const AddSong = () => {
  const classes = useStyles()
  const [url, setUrl] = React.useState('')
  const [playable, setPlayable] = React.useState(false)
  const [dialog, setDialog] = React.useState(false)

  React.useEffect(() => {
    const isPlayable =
      SoundcloudPlayer.canPlay(url) || YouTubePlayer.canPlay(url)

    setPlayable(isPlayable)
  }, [url])

  function handleCloseDialog() {
    setDialog(false)
  }

  function handleEditSong() {}

  return (
    <div className={classes.container}>
      <Dialog
        className={classes.dialog}
        open={dialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle>Edit Song</DialogTitle>

        <DialogContent>
          <img
            src="https://images.unsplash.com/photo-1636640157099-a67767c2cd35?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Song Image"
            className={classes.thumbnail}
          />
          <TextField margin="dense" name="title" label="Title" fullWidth />
          <TextField margin="dense" name="artist" label="Artist" fullWidth />
          <TextField
            margin="dense"
            name="thumbnail"
            label="Thumbnail"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button variant="outlined" color="primary">
            Add Song
          </Button>
        </DialogActions>
      </Dialog>
      <TextField
        className={classes.urlInput}
        onChange={(event) => setUrl(event.target.value)}
        value={url}
        placeholder="Add YouTube or Soundcloud URL"
        fullWidth
        margin="normal"
        type="url"
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <Link />
            </InputAdornment>
          ),
        }}
      />
      <Button
        disabled={!playable}
        className={classes.addSongButton}
        onClick={() => setDialog(true)}
        variant="contained"
        color="primary"
        endIcon={<AddBoxOutlined />}
      >
        Add
      </Button>
      <ReactPlayer url={url} hidden onReady={handleEditSong} />
    </div>
  )
}

export default AddSong
