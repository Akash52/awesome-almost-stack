import React, { createContext, useContext, useReducer, useRef } from "react"
import axios from "axios"
import { connect } from "twilio-video"

const TWILIO_TOKEN_URL = "https://inchworm-ape-6990.twil.io/create-room"

const DEFAULT_STATE = {
  identity: false,
  roomName: false,
  token: false,
  room: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "join":
      return {
        ...state,
        token: action.token,
        identity: action.identity,
        roomName: action.roomName,
      }
    case "leave":
      return {
        ...state,
        identity: false,
        roomName: false,
      }
    case "set-active-room":
      return {
        ...state,
        room: action.room,
      }
    default:
      return DEFAULT_STATE
  }
}

const StoreContext = createContext()

const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={useReducer(reducer, DEFAULT_STATE)}>
      {children}
    </StoreContext.Provider>
  )
}

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)

const useTwillioVideo = () => {
  const [state, dispatch] = useContext(StoreContext)
  const videoRef = useRef()

  //headers for the request
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type",
  }

  const getRoomToken = async ({ identity, roomName }) => {
    const response = await axios.post(
      TWILIO_TOKEN_URL,
      {
        identity,
        room: roomName,
      },
      { headers }
    )

    dispatch({ type: "join", token: response.data, identity, roomName })
  }

  const connectToRoom = async () => {
    if (!state.token) {
      return
    }
    const room = await connect(state.token, {
      name: state.roomName,
      audio: true,
      video: {
        width: { ideal: 640 },
        logLevel: "info",
      },
    }).catch(error => {
      console.error(error)
    })
    const localTrack = [...room.localParticipant.tracks.values()][0].track

    // const remoteTracks = [...room.participants.values()][0].tracks.values()
    if (!videoRef.current.hasChildNodes()) {
      const localEl = localTrack.attach()
      videoRef.current.appendChild(localEl)
    }
    dispatch({ type: "set-active-room", room })
  }

  const startVideo = async () => connectToRoom()

  return {
    state,
    getRoomToken,
    startVideo,
    videoRef,
  }
}

export default useTwillioVideo
