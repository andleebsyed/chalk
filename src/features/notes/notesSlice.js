import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ADD_LABEL,
  ADD_NOTE,
  ADD_TO_PINNED,
  DELETE_NOTE,
  FETCH_NOTES_DATA,
  REMOVE_FROM_PINNED,
  UPDATE_NOTE,
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
export const updateNote = createAsyncThunk(
  "/note/update",
  async ({ formData }, thunkAPI) => {
    try {
      const response = await axios.post(UPDATE_NOTE, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("on updating a note ", { response });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const deleteNote = createAsyncThunk(
  "/note/delete",
  async (noteId, thunkAPI) => {
    try {
      console.log(noteId);
      const response = await axios.post(DELETE_NOTE, noteId);
      console.log({ response }, " on deleting a note");
      return { data: response.data, noteId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const notesSlice = createSlice({
  name: "notesSlice",
  initialState: {
    notesFetchstatus: "idle",
    allNotes: [],
    notes: [],
    pinnedNotes: [],
    labels: null,
    chosenLabels: [],
    chosenLabelsComponent: "createNote",

    error: null,
    status: "idle",
    removePinStatus: "idle",
    pinNoteStatus: "idle",
    editNoteModalStatus: false,
    noteToEdit: null,
    updateNoteStatus: "idle",
    deleteNoteStatus: "idle",
  },
  reducers: {
    enableEditModal: (state, action) => {
      state.editNoteModalStatus = true;
      state.noteToEdit = action.payload.note;
      state.chosenLabelsComponent = "editNote";
      state.chosenLabels = [];
    },
    disableEditModal: (state) => {
      console.log("coming to diable n=moal");
      state.editNoteModalStatus = false;
      state.noteToEdit = null;
      state.chosenLabelsComponent = "createNote";
      state.chosenLabels = [];
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
    setUpLabelsInEditComponent: (state, action) => {
      state.chosenLabels = action.payload.labels;
    },
    // setChosenLabelComponent: (state, action) => {
    //   state.chosenLabelsComponent = action.payload.component;
    // },
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
      state.allNotes = action.payload.noteData.notes;
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
      const unPinnedIndex = state.allNotes.findIndex(
        (note) => note._id === action.payload.unPinnedNote._id
      );
      state.allNotes[unPinnedIndex] = action.payload.unPinnedNote;
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
      const pinnedIndex = state.allNotes.findIndex(
        (note) => note._id === action.payload.pinnedNote._id
      );
      state.allNotes[pinnedIndex] = action.payload.pinnedNote;
      state.notes = state.notes.filter(
        (note) => note._id !== action.payload.pinnedNote._id
      );
      state.pinnedNotes.push(action.payload.pinnedNote);
    },
    [updateNote.pending]: (state) => {
      state.updateNoteStatus = "pending";
    },
    [updateNote.fulfilled]: (state, action) => {
      state.updateNoteStatus = "success";
      const { updatedNote } = action.payload;
      const updatedNoteIndex = state.allNotes.findIndex(
        (note) => note._id === updatedNote._id
      );
      state.allNotes[updatedNoteIndex] = updatedNote;
      state.notes = state.allNotes.filter((note) => note.pinned === false);
      state.pinnedNotes = state.allNotes.filter((note) => note.pinned === true);
    },
    [updateNote.rejected]: (state, action) => {
      state.updateNoteStatus = "failed";
      state.error = action.payload;
    },
    [deleteNote.pending]: (state) => {
      state.deleteNoteStatus = "idle";
    },
    [deleteNote.fulfilled]: (state, action) => {
      state.deleteNoteStatus = "success";
      console.log(action.payload);
      const noteId = action.payload.noteId.noteId;
      console.log(noteId);
      state.allNotes = state.allNotes.filter((note) => note._id !== noteId);
      state.notes = state.notes.filter((note) => note._id !== noteId);
      state.pinnedNotes = state.pinnedNotes.filter(
        (note) => note._id !== noteId
      );
    },
    [deleteNote.rejected]: (state, action) => {
      state.deleteNoteStatus = "failed";
      state.error = action.payload.errorDetail;
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
  setChosenLabelComponent,
  setUpLabelsInEditComponent,
} = notesSlice.actions;
export default notesSlice.reducer;
