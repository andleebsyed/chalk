import React from "react";
import { useSelector } from "react-redux";
import { ShowNote } from "./ShowNote";
export function Notes() {
  const { notes, } = useSelector(state => state.notes)
  return (
    <div className="flex flex-wrap">
      {notes?.map(note =>
        <div key={note?._id}>
          <ShowNote note={note} />
        </div>
      )}
    </div>
  );
}
