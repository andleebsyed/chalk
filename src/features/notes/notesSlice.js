import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ADD_LABEL,
  ADD_NOTE,
  ADD_TO_PINNED,
  FETCH_NOTES_DATA,
  REMOVE_FROM_PINNED,
} from "../../services/api";

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
export const removeFromPinned = createAsyncThunk(
  "note/removefrompinned",
  async (noteId, thunkAPI) => {
    try {
      const response = await axios.post(REMOVE_FROM_PINNED, noteId);
      console.log({ response }, " pin was removed");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addToPinned = createAsyncThunk(
  "/note/pinnote",
  async (noteId, thunkAPI) => {
    try {
      const response = await axios.post(ADD_TO_PINNED, noteId);
      console.log({ response }, " pin was added");
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
    status: "idle",
    removePinStatus: "idle",
    pinNoteStatus: "idle",
    editNoteModalStatus: false,
    noteToEdit: null,
  },
  reducers: {
    enableEditModal: (state, action) => {
      state.editNoteModalStatus = true;
      state.noteToEdit = action.payload.note;
    },
    disableEditModal: (state) => {
      console.log("coming to diable n=moal");
      state.editNoteModalStatus = false;
      state.noteToEdit = null;
    },
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
    resetChosenLabels: (state) => {
      state.chosenLabels = [];
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
      state.notes = action.payload.noteData.notes.filter(
        (note) => note.pinned === false
      );
      state.pinnedNotes = action.payload.noteData.notes.filter(
        (note) => note.pinned === true
      );
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
      state.error = null;
    },
    [addNote.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
      // state.notes.push(action.payload.newNote);
    },
    [removeFromPinned.pending]: (state) => {
      state.removePinStatus = "pending";
    },
    [removeFromPinned.fulfilled]: (state, action) => {
      state.removePinStatus = "success";
      state.pinnedNotes = state.pinnedNotes.filter(
        (pinnedNote) => pinnedNote._id !== action.payload.unPinnedNote._id
      );
      state.notes.push(action.payload.unPinnedNote);
    },
    [removeFromPinned.rejected]: (state, action) => {
      state.removePinStatus = "failed";
      state.error = action.payload;
    },
    [addToPinned.pending]: (state) => {
      state.pinNoteStatus = "pending";
    },
    [addToPinned.fulfilled]: (state, action) => {
      state.pinNoteStatus = "success";
      state.notes = state.notes.filter(
        (note) => note._id !== action.payload.pinnedNote._id
      );
      state.pinnedNotes.push(action.payload.pinnedNote);
    },
  },
});
export const {
  setupNotes,
  addToChosenLabels,
  removeFromChosenLabels,
  resetChosenLabels,
  enableEditModal,
  disableEditModal,
} = notesSlice.actions;
export default notesSlice.reducer;
