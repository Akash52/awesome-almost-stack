import React, { useEffect } from "react"
import Layout from "./../components/layout"
import { navigate } from "gatsby"
import { Router } from "@reach/router"
import VideoDisplay from "./../components/video-display"

const BounceToHome = () => {
  useEffect(() => {
    navigate("/", {
      state: {
        message: "You have successfully joined the room",
      },
      replace: true,
    })
  }, [])
  return null
}

export default () => (
  <Layout>
    <Router>
      <VideoDisplay path="room/:roomID" />
      <BounceToHome default />
    </Router>
  </Layout>
)
