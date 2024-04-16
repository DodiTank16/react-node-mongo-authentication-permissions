import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  message: "",
  registrationData: {},
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    registration: (state) => {
      state.registrationData = {};
      state.error = null;
      state.message = "";
    },
    registrationSuccess: (state, action) => {
      state.registrationData = action?.payload;
      state.error = null;
      state.message = action?.payload?.message;
    },
    registrationFailure: (state, action) => {
      state.registrationData = {};
      state.error = action?.payload;
      state.message = action?.payload?.message;
    },
  },
});

export const { registration, registrationSuccess, registrationFailure } =
  registrationSlice.actions;

export default registrationSlice.reducer;
