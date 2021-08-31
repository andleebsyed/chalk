import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    // authorized: false,
    authorized: localStorage.getItem("token") ? true : false,
  },
  reducers: {
    setAuth: (state) => {
      state.authorized = true;
    },
    removeAuth: (state) => {
      state.authorized = false;
    },
  },
  extraReducers: {},
});

export default authSlice.reducer;
export const { setAuth, removeAuth } = authSlice.actions;
