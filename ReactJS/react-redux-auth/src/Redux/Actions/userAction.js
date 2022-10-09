import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
  USER_DETAILS_FAIL,
  USER_DETAILS_SUCCESS,
} from '../constant/userConstant'

export const userRegisterAction = (data) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST })
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message })
  }
}

export const userLogoutAction = () => async (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
}

export const userDetailsAction = () => async (dispatch) => {
  try {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    dispatch({ type: USER_DETAILS_SUCCESS, payload: userInfo })
  } catch (error) {
    dispatch({ type: USER_DETAILS_FAIL, payload: error.message })
  }
}
