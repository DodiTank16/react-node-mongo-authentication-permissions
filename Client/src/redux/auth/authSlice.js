import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  message: "",
  authData: {},
  isFetchedAuthData: false,
};

const authSlice = createSlice({
  name: "AuthInfo",
  initialState,
  reducers: {
    authData: (state) => {
      state.authData = {};
      state.error = null;
      state.isFetchedAuthData = false;
      state.message = "";
    },
    authDataSuccess: (state, action) => {
      state.authData = action?.payload;
      state.error = null;
      state.isFetchedAuthData = true;
      state.message = action?.payload?.message;
    },
    authDataFailure: (state, action) => {
      state.authData = {};
      state.error = action?.payload;
      state.message = action?.payload?.message;
      state.isFetchedAuthData = false;
    },
  },
});

export const { authData, authDataSuccess, authDataFailure } = authSlice.actions;

export default authSlice.reducer;
