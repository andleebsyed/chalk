import React from "react"
import { useSelector } from "react-redux"
import { ShowNote } from "./ShowNote"
export function PinnedNotes() {
    const { pinnedNotes } = useSelector(state => state.notes)
    return (
        <>
            <h1 className="text-blue font-bold text-lg self-center">Pinned</h1>
            <div className="flex flex-wrap">
                {pinnedNotes?.map(note =>
                    <div key={note?._id}>
                        <ShowNote note={note} />
                    </div>
                )}
            </div>
        </>
    )
}