import React, { useContext, useState, useRef, useEffect } from 'react'
import { DataContext } from './DataProvider'
import { ToastContainer, toast, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function FormInput() {
  const [todos, setTodos] = useContext(DataContext)
  const [todoName, setTodoName] = useState('')
  const todoInput = useRef()

  const notify = () =>
    toast.success('😖 Sucessfully Added !', {
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Flip,
    })

  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, { name: todoName, complete: false }])
    setTodoName('')
    todoInput.current.focus()
  }
  useEffect(() => {
    todoInput.current.focus()
  }, [])
  return (
    <form autoComplete="off" onSubmit={addTodo}>
      <input
        type="text"
        name="todos"
        id="todos"
        ref={todoInput}
        required
        placeholder="What you do today !?"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value.toLowerCase())}
      />
      <button type="submit" onClick={notify}>
        Create
      </button>
      <ToastContainer />
    </form>
  )
}
