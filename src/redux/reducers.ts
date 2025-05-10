import { combineReducers } from "@reduxjs/toolkit";
import advice from "./SliceRedux/savedAdvice";

export const rootReducer = combineReducers({
  advice,
});
