import React from "react";
import { useSelector } from "react-redux";
import { ShowNote } from "./ShowNote";
export function Notes() {
  const { notes, } = useSelector(state => state.notes)
  // const orderedNotes = notes
  //   ?.slice()
  //   .sort((a, b) => b?.createdAt.localeCompare(a?.createdAt));
  return (
    <>
      <h1 className="text-blue font-bold text-lg self-center">Others</h1>
      <div className="flex flex-wrap">
        {notes?.map(note =>
          <div key={note?._id}>
            <ShowNote note={note} />
          </div>
        )}
      </div>
    </>
  );
}
