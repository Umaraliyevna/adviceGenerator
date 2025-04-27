import { combineReducers } from "@reduxjs/toolkit";
import savedAdvice from "./SliceRedux/savedAdvice";

export const rootReducer = combineReducers({
  savedAdvice,
});
