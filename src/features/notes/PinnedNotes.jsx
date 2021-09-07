import React from "react"
import { useSelector } from "react-redux"
import { ShowNote } from "./ShowNote"
export function PinnedNotes() {
    const { allNotes } = useSelector(state => state.notes)
    const pinnedNotes = allNotes.filter(note => note.pinned === true)

    return (
        pinnedNotes?.length !== 0 &&
        <>
            <h1 className="text-blue font-bold self-center">Pinned Notes</h1>
            <div className="flex flex-wrap justify-center sm:justify-start">
                {
                    pinnedNotes?.map(note =>
                        <div key={note?._id}>
                            <ShowNote note={note} />
                        </div>
                    )
                }
            </div>
        </>
    )
}
