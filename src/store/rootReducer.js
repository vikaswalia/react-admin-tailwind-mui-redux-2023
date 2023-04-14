import { combineReducers } from "redux";
import userReducer from "@/store/slices/auth/userSlice";

const rootReducer = {
  user: userReducer,
};

export default rootReducer;
