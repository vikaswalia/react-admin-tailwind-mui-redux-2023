import { combineReducers } from "redux";
import userReducer from "./slices/auth/userSlice";

const rootReducer = {
  user: userReducer,
};

export default rootReducer;
