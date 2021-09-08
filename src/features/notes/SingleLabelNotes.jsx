import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { EditNote } from "./EditNote"
import { removeLabel } from "./notesSlice"
import { ShowNote } from "./ShowNote"
export function SingleLabelNotes() {
    const { allNotes, labels } = useSelector(state => state.notes)
    const { labelId } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const label = labels?.find(label => label._id === labelId)
    const thisLabelNotes = allNotes.filter(note => note.labels?.find(label => label._id === labelId))
    async function deleteLabelHandler() {
        await dispatch(removeLabel({ labelId }))
        navigate('/home')

    }
    return (
        <div className="flex flex-col">
            {label &&
                <div className="flex my-2">
                    <p className="m-2 self-start text-lg font-bold text-blue">{label.labelName}</p>
                    <button onClick={deleteLabelHandler} className="ml-auto mr-2 p-2 rounded bg-red-600 bg-opacity-50 hover:bg-opacity-100 font-bold">Delete Label</button>

                </div>
            }
            <div className="flex flex-wrap justify-center sm:justify-start">

                {thisLabelNotes.map(singleLabelNote =>
                    <div key={singleLabelNote?._id}>
                        <ShowNote note={singleLabelNote} />
                    </div>
                )}
            </div>
            <EditNote />
        </div>
    )
}