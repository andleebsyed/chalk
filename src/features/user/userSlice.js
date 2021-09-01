import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { FETCH_ACCOUNT } from "../../services/api";

import {
  FETCH_ACCOUNT,
  UPDATE_ACCOUNT,
  UPDATE_PASSWORD,
} from "../../services/api";

export const fetchAccount = createAsyncThunk(
  "/user/account",
  async (thunkAPI) => {
    try {
      const response = await axios.post(FETCH_ACCOUNT);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response);
    }
  }
);
export const updateAccount = createAsyncThunk(
  "/user/update",
  async (newAccountDetails, thunkAPI) => {
    try {
      console.log(newAccountDetails);
      const response = await axios.post(UPDATE_ACCOUNT, newAccountDetails);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const updatePassword = createAsyncThunk(
  "user/updatepassword",
  async (passwords, thunkAPI) => {
    try {
      const response = await axios.post(UPDATE_PASSWORD, passwords);
      console.log({ response });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    accountStatus: "idle",
    account: null,
    updateAccountStatus: "idle",
    error: null,
    updateAccountError: null,
    updatePasswordStatus: null,
  },
  reducers: {},
  extraReducers: {
    [fetchAccount.pending]: (state) => {
      state.accountStatus = "loading";
    },
    [fetchAccount.fulfilled]: (state, action) => {
      state.accountStatus = "success";
      state.account = action.payload.account;
    },
    [fetchAccount.rejected]: (state, action) => {
      state.accountStatus = "error";
      state.error = action.payload;
    },
    [updateAccount.pending]: (state) => {
      state.updateAccountStatus = "Updating";
    },
    [updateAccount.fulfilled]: (state, action) => {
      state.updateAccountStatus = "Account updated Successfully";
      state.account = action.payload.account;
      state.updateAccountError = null;
    },
    [updateAccount.rejected]: (state, action) => {
      state.updateAccountStatus = "";
      state.updateAccountError = action.payload.message;
    },
    [updatePassword.pending]: (state) => {
      state.error = null;
      state.updatePasswordStatus = "Updating";
    },
    [updatePassword.fulfilled]: (state, action) => {
      state.updatePasswordStatus = action.payload.message;
      state.error = null;
      // state.Password = action.payload.Password;
      // state.updatePasswordError = null;
    },
    [updatePassword.rejected]: (state, action) => {
      // state.updatePasswordStatus = action.payload.message;
      state.error = action.payload.message;
    },
  },
});

export default userSlice.reducer;
