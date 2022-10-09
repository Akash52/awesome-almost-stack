import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  userRegisterReducer,
  userDetailsReducer,
  userLogoutReducer,
} from './Redux/Reducers/userReducer'

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userogout: userLogoutReducer,
})

const initialState = {}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
