const alertReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return {
        ...state,
        alert: action.payload,
      }
    case 'CLEAR_ALERT':
      return {
        ...state,
        alert: null,
      }
    default:
      return state
  }
}

export default alertReducer
