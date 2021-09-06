/* eslint-disable react/prop-types */
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { disableEditModal } from "./notesSlice";
export function EditNote() {

    const { noteToEdit, editNoteModalStatus } = useSelector(state => state.notes)
    console.log(noteToEdit, editNoteModalStatus)
    const dispatch = useDispatch()
    return (
        editNoteModalStatus && <div onClick={() => { dispatch(disableEditModal()) }} className=" fixed top-0 left-0 bottom-0 right-0  bg-dark-1 bg-opacity-50 flex items-center justify-center min-h-screen min-w-screen ">
            <div className="border border-red-500 " onClick={(e) => e.stopPropagation()}>
                <button onClick={(e) => { e.stopPropagation(); dispatch(disableEditModal()) }}>X</button>
                <p>this is where we willl edit a note</p>
                <p>{noteToEdit?.content}</p>
            </div>
        </div>

    )
}
