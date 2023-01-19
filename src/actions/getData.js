import axios from "axios";
import { BASE_URL, TOKEN } from "../constants";
import {
    CLEAR_ERROR,
  GET_INGREDIENT_FAIL,
  GET_INGREDIENT_REQUEST,
  GET_INGREDIENT_SUCCESS,
  GET_PROCESS_FAIL,
  GET_PROCESS_REQUEST,
  GET_PROCESS_SUCCESS,
  GET_RECIPE_FAIL,
  GET_RECIPE_REQUEST,
  GET_RECIPE_SUCCESS,
} from "../constants/types";
import { getLocalData } from "../hooks/localStorage";

//GET RECIPE BY USER ID
export const getAllRecipe = (creator_id) => async (dispatch) => {
  const url = `${BASE_URL}/api/recipe/all?creator_id=${creator_id}`;
  try {
    dispatch({ type: GET_RECIPE_REQUEST });
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": await getLocalData(TOKEN),
      },
      withCredentials: true,
    });
    dispatch({
      type: GET_RECIPE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_RECIPE_FAIL,
      payload: error.response.data.message,
    });
  }
};

//GET INGREDIENTS BY USER ID
export const getAllIngredient = (recipe_id) => async (dispatch) => {
  const url = `${BASE_URL}/api/ingredient/all?recipe_id=${recipe_id}`;
  try {
    dispatch({ type: GET_INGREDIENT_REQUEST });
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": await getLocalData(TOKEN),
      },
      withCredentials: true,
    });
    dispatch({
      type: GET_INGREDIENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_INGREDIENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

//GET PROCESS BY USER ID
export const getAllProcess = (recipe_id) => async (dispatch) => {
  const url = `${BASE_URL}/api/process/all?recipe_id=${recipe_id}`;
  try {
    dispatch({ type: GET_PROCESS_REQUEST });
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": await getLocalData(TOKEN),
      },
      withCredentials: true,
    });
    dispatch({
      type: GET_PROCESS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROCESS_FAIL,
      payload: error.response.data.message,
    });
  }
};


//CLEAR ERROR
export const clearError = () => async (dispatch) => {
    dispatch({
      type: CLEAR_ERROR
    });
  };