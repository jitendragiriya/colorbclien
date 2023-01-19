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

//ALL INGREDIENTS REDUCER
export const allIngredientReducer = (state = { ingredients: [] }, action) => {
  switch (action.type) {
    case GET_INGREDIENT_REQUEST:
      return {
        loading: true,
      };
    case GET_INGREDIENT_SUCCESS:
      return {
        loading: false,
        ingredients: action.payload,
      };
    case GET_INGREDIENT_FAIL:
      return {
        ...state,
        loading: false,
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

//ALL RECIPE REDUCER
export const allRecipeReducer = (state = { recipies: [] }, action) => {
  switch (action.type) {
    case GET_RECIPE_REQUEST:
      return {
        loading: true,
      };
    case GET_RECIPE_SUCCESS:
      return {
        loading: false,
        recipies: action.payload,
      };
    case GET_RECIPE_FAIL:
      return {
        ...state,
        loading: false,
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

//ALL RECIPE REDUCER
export const allProcessReducer = (state = { process: [] }, action) => {
  switch (action.type) {
    case GET_PROCESS_REQUEST:
      return {
        loading: true,
      };
    case GET_PROCESS_SUCCESS:
      return {
        loading: false,
        process: action.payload,
      };
    case GET_PROCESS_FAIL:
      return {
        ...state,
        loading: false,
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
