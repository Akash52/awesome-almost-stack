import {
  USER_REGISTER_REQUEST,
  USER_LOGOUT,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
} from '../constant/userConstant'

//user register reducer
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: false,
        user: action.payload,
      }
    default:
      return state
  }
}

//user logout reducer

export const userLogoutReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}

//user details reducer
export const userDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      }
    case USER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
