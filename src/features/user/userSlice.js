import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FETCH_ACCOUNT } from "../../services/api";

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

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    accountStatus: "idle",
    account: null,
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
  },
});

export default userSlice.reducer;
