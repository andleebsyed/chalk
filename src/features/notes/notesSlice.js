import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ADD_LABEL, FETCH_NOTES_DATA } from "../../services/api";

export const addLabel = createAsyncThunk(
  "/note/addlabel",
  async (labelName, thunkAPI) => {
    try {
      const response = await axios.post(ADD_LABEL, labelName);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchNotesData = createAsyncThunk(
  "/user/fetchnotesdata",
  async (thunkAPI) => {
    try {
      const response = await axios.post(FETCH_NOTES_DATA);
      console.log({ response });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const notesSlice = createSlice({
  name: "notesSlice",
  initialState: {
    notesFetchstatus: "idle",
    labels: null,
    chosenLabels: [],
    // notes: null,
    error: null,
  },
  reducers: {
    setupNotes: (state, action) => {
      state.labels = action.payload.labels;
      // state.notes = action.payload.notes
    },
    addToChosenLabels: (state, action) => {
      state.chosenLabels.push(action.payload.newChosenLabel);
    },
    removeFromChosenLabels: (state, action) => {
      console.log("is it coming here");
      state.chosenLabels = state.chosenLabels.filter(
        (label) => label._id !== action.payload.removedLabel._id
      );
      // state.choosenLabels.push(action.payload.newChosenLabel);
    },
  },

  extraReducers: {
    [addLabel.pending]: (state) => {
      state.addLabelStatus = "Adding Label";
    },
    [addLabel.fulfilled]: (state, action) => {
      state.addLabelStatus = "Label added";
      state.labels.push(action.payload.newLabel);
    },
    [addLabel.rejected]: (state, action) => {
      state.addLabelStatus = "";
      state.error = action.payload.message;
    },
    [fetchNotesData.pending]: (state) => {
      state.notesFetchstatus = "pending";
    },
    [fetchNotesData.fulfilled]: (state, action) => {
      state.notesFetchstatus = "success";
      state.labels = action.payload.noteData.labels;
    },
    [fetchNotesData.rejected]: (state, action) => {
      state.notesFetchstatus = "error";
      state.error = action.payload.message;
    },
  },
});
export const { setupNotes, addToChosenLabels, removeFromChosenLabels } =
  notesSlice.actions;
export default notesSlice.reducer;
