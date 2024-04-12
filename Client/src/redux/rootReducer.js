import { combineReducers } from "redux";
import authSlice from "./auth/authSlice";

const rootReducer = combineReducers({
  Auth: authSlice,
});

export default rootReducer;
