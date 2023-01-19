import {
  AUTH_FAIL,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  CLEAR_ERROR,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../constants/types";

//AUTH REDUCER
export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case AUTH_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

//LOGIN REDUCER
export const loginReducer = (state = { token: "" }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        token: action.payload,
      };
    case LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
