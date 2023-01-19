import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { authReducer, loginReducer } from "./reducer/auth";
import {
  allIngredientReducer,
  allProcessReducer,
  allRecipeReducer,
} from "./reducer/getDatas";

const reducer = combineReducers({
  Auth: authReducer,
  Login: loginReducer,
  Recipe: allRecipeReducer,
  Ingredient: allIngredientReducer,
  Process: allProcessReducer,
});

let initialstate = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialstate,
  applyMiddleware(...middleware)
);

export default store;
