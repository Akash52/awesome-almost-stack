import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
} from '../constant/userConstant';

export const userListAction = (page) => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const data = await response.json();

    console.log(data);
    dispatch({ type: USER_LIST_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: USER_LIST_FAILURE, payload: error.message });
  }
};

//users

// export const userListAction = (pageNumber) => async (dispatch) => {
//     try {
//       dispatch({ type: USER_LIST_REQUEST });
//       const response = await fetch(`https://reqres.in/api/users?page=1`);
//       const data = await response.json();

//       console.log(data);
//       dispatch({ type: USER_LIST_SUCCESS, payload: data.data });
//     } catch (error) {
//       dispatch({ type: USER_LIST_FAILURE, payload: error.message });
//     }
//   };
