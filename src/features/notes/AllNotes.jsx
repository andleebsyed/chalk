import React from "react";
import { useSelector } from "react-redux";
import { ShowNote } from "./ShowNote";
export function Notes() {
  const { notes, } = useSelector(state => state.notes)
  // const orderedNotes = notes
  //   ?.slice()
  //   .sort((a, b) => b?.createdAt.localeCompare(a?.createdAt));
  return (
    notes.length !== 0 &&
    <div className="flex flex-col">
      <h1 className="self-center text-blue font-bold ml-4">Others</h1>
      <div className="flex flex-wrap  justify-center sm:justify-start">


        {notes?.map(note =>
          <div key={note?._id}>
            <ShowNote note={note} />
          </div>
        )}
      </div>
    </div>
  );
}
