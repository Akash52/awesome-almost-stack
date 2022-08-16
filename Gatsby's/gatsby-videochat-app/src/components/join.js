import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import useTwillioVideo from "../hooks/use-twillio-video"

const Join = ({ location }) => {
  const defaultRoom = location.state ? location.state.roomName : ""
  const { state, getRoomToken } = useTwillioVideo()
  const [name, setName] = useState("")
  const [room, setRoom] = useState(defaultRoom)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")
    if (!name || !room) {
      setError("Please enter a name and room name")
      setLoading(false)
      return
    }
    try {
      await getRoomToken({
        identity: name,
        roomName: room,
      })
      setSuccess(`You have successfully joined the room`)
    } catch (error) {
      setError(error.message)
    }
    setLoading(false)
  }

  //Error handling using useEffect
  useEffect(() => {
    if (state.token) {
      navigate("/room/" + state.roomName, {
        state: {
          message: "You have successfully joined the room",
        },
      })
    }
    if (error) {
      setTimeout(() => {
        setError("")
      }, 3000)
    }
    if (success) {
      setTimeout(() => {
        setSuccess("")
      }, 3000)
    }
    return () => {
      setName("")
      setRoom("")
    }
  }, [error, success, state])

  return (
    <div className="flex flex-col min-h-screen">
      <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <form
          className="flex flex-col px-4 py-2 border-2 rounded-md shadow-md border-emerald-100"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-gray-900">Join a Room</h2>
          <p className="text-gray-600 ">
            Enter your name and room name to join
          </p>
          <div className="mt-8">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="room"
            >
              Room
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="room"
              type="text"
              placeholder="Enter room name"
              value={room}
              onChange={e => setRoom(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center mt-8">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={() => {
                setLoading(true)
                setError("")
                setSuccess("")
                if (name && room) {
                  setLoading(false)
                  setSuccess("")
                  setError("")
                } else {
                  setLoading(false)
                  setSuccess("")
                }
              }}
            >
              {loading ? "Loading..." : "Join Video Chat"}
            </button>
          </div>
          <div className="mt-8">
            {error && <p className="text-sm text-red-500">{error}</p>}
            {success && <p className="text-sm text-green-500">{success}</p>}
          </div>
        </form>
      </div>
    </div>
  )
}
export default Join
