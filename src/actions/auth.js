import axios from "axios";
import { BASE_URL, TOKEN } from "../constants";
import {
  AUTH_FAIL,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../constants/types";
import { getLocalData } from "../hooks/localStorage";

//AUTH
export const auth = () => async (dispatch) => {
  const url = `${BASE_URL}/api/auth`;
  try {
    dispatch({ type: AUTH_REQUEST });
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": await getLocalData(TOKEN),
      },
      withCredentials: true,
    });
    dispatch({
      type: AUTH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
      payload: error.response.data.message,
    });
  }
};

//LOGIN
export const login = (formData) => async (dispatch) => {
  const url = `${BASE_URL}/api/login`;
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.token,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};
