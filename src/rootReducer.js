import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from "./features/navigationSlice";

export const rootReducer = combineReducers({
  navigation: navigationReducer,
});
