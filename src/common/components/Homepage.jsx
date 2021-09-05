import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Notes } from "../../features/notes/AllNotes";
import { CreateNote } from "../../features/notes/createNote";
import { fetchNotesData } from "../../features/notes/notesSlice";
import { PinnedNotes } from "../../features/notes/PinnedNotes";
export function Homepage() {
  const dispatch = useDispatch()
  const { notesFetchstatus } = useSelector(state => state.notes)
  const { authSetupStatus } = useSelector(state => state.auth)
  useEffect(() => {
    if (notesFetchstatus === "idle" && authSetupStatus) {
      dispatch(fetchNotesData())
    }

  }, [notesFetchstatus, authSetupStatus])

  return (
    <div className="flex flex-col ">
      <CreateNote />
      <PinnedNotes />
      <Notes />

    </div>
  );
}
