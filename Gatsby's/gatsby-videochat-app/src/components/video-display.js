import React, { useEffect } from "react"
import useTwillioVideo from "../hooks/use-twillio-video"
import { navigate } from "gatsby"

const VideoDisplay = ({ roomID }) => {
  const { state, startVideo, videoRef } = useTwillioVideo()

  useEffect(() => {
    if (!state.token) {
      navigate("/", {
        state: {
          message: "You must be logged in to join a room",
          roomName: roomID,
        },
      })
    }
    if (!state.room) {
      startVideo()
    }
  }, [state, roomID, startVideo])

  return (
    <>
      <h1> Room : {roomID} </h1>
      <div ref={videoRef} className="video-container" />
    </>
  )
}
export default VideoDisplay
