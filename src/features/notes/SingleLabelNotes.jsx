import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { EditNote } from "./EditNote"
import { ShowNote } from "./ShowNote"
export function SingleLabelNotes() {
    const { allNotes, labels } = useSelector(state => state.notes)
    const { labelId } = useParams()
    const label = labels?.find(label => label._id === labelId)
    console.log({ allNotes })
    console.log({ labelId })
    const thisLabelNotes = allNotes.filter(note => note.labels.find(label => label._id === labelId))
    console.log({ thisLabelNotes })
    console.log({ label })
    return (
        <div className="flex flex-col">
            {label &&
                <div className="flex my-2">
                    <p className="m-2 self-start text-lg font-bold text-blue">{label.labelName}</p>
                    <button className="ml-auto mr-2 p-2 rounded bg-red-600 bg-opacity-50 hover:bg-opacity-100 font-bold">Delete Label</button>

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