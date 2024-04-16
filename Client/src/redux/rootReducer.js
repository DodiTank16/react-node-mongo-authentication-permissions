import { combineReducers } from "redux";
import authSlice from "./auth/authSlice";
import adminRegistrationSlice from "./auth/adminRegistrationSlice";

const rootReducer = combineReducers({
  Auth: authSlice,
  adminRegistration: adminRegistrationSlice,
});

export default rootReducer;
