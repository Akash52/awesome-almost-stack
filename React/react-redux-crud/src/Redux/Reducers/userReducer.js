import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
  USER_DELETE_SUCCESS,
  USER_ADD_SUCCESS,
  USER_UPDATE_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE,
} from "../constant/userConstant";

const initialState = {
  loading: false,
  users: [],
  error: null,
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return state;
    case USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case USER_LIST_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case USER_ADD_SUCCESS:
      return {
        ...state,
        users: [...state.users, { ...action.payload }],
      };
    case USER_DELETE_SUCCESS:
      console.log("dsd", action.payload);
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        person: action.payload,
      };
    case USER_DETAILS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

//user details

const userDetailsReducer = (state = { person: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true, ...state };
    case USER_DETAILS_SUCCESS:
      return { loading: false, person: action.payload };
    case USER_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export { userListReducer, userDetailsReducer };
