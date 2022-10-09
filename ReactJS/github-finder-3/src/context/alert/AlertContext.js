import { createContext, useReducer } from 'react'
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const initialState = {
    alert: null,
  }

  const [state, dispatch] = useReducer(alertReducer, initialState)

  const setAlert = (msg, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, type },
    })

    setTimeout(() => dispatch({ type: 'CLEAR_ALERT' }), 3000)
  }

  return (
    <AlertContext.Provider value={{ alert: state.alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext
