import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../features/notes/notesSlice";
import authReducer from "../features/auth/authSlice";
export const store = configureStore({
  reducer: {
    notes: notesReducer,
    auth: authReducer,
  },
});
