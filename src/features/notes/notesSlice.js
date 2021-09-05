import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ADD_LABEL, ADD_NOTE, FETCH_NOTES_DATA } from "../../services/api";

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
export const addNote = createAsyncThunk(
  "/note/add",
  async ({ formData }, thunkAPI) => {
    try {
      // console.log("data coming or not ", { formData });
      const response = await axios.post(ADD_NOTE, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("on adding a note ", { response });
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
    notes: [],
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
      state.notes = action.payload.noteData.notes;
    },
    [fetchNotesData.rejected]: (state, action) => {
      state.notesFetchstatus = "error";
      state.error = action.payload?.message;
    },
    [addNote.pending]: (state) => {
      state.status = "pending";
    },
    [addNote.fulfilled]: (state, action) => {
      state.status = "success";
      state.notes.push(action.payload.newSavedNote);
    },
    [addNote.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload?.errorDetail;
      // state.notes.push(action.payload.newNote);
    },
  },
});
export const { setupNotes, addToChosenLabels, removeFromChosenLabels } =
  notesSlice.actions;
export default notesSlice.reducer;
