import React, { useState } from "react"
import { RiPushpin2Line } from 'react-icons/ri'
import { IoColorPaletteSharp } from 'react-icons/io5'
// import { MdLabel } from 'react-icons/md'
import { BiImageAlt } from 'react-icons/bi'
import { RiPushpin2Fill } from 'react-icons/ri'
import { LabelModal } from "../../common/components/LabelModal/LabelModal"
import { useDispatch, useSelector } from "react-redux"
import { removeFromChosenLabels } from "./notesSlice"
// export function ColorPallate() {
//     const noteColors = ["white", "palette-yellow", "palette-blue", "palette-red", "palette-purple"]
//     return (



//     )
// }
export function CreateNote() {
    const [pinned, setPinned] = useState(false)
    const { chosenLabels } = useSelector(state => state.notes)
    const dispatch = useDispatch()
    // const [palatte, setPalatte] = useState(false)
    // const [noteColor, setNoteColor] = useState("white")
    // const noteColors = ["palette-blue", "palette-yellow", "palette-red", "palette-purple"]
    return (
        // dark:bg-${noteColor === ("white" || "off-white") ? "dark-1" : noteColor}
        <div className={`m-8 p-2 w-[90%] bg-white dark:bg-dark-1  max-w-[600px] min-h-[152px] rounded-lg  box-shadow-light dark:box-shadow-dark `}>

            <form className="flex flex-col p-2 outline-none  " onSubmit={(e) => e.preventDefault()}>
                <section className="flex mb-1">
                    <input type="text" placeholder="Title" className={`h-[36px] w-full p-2 outline-none bg-white dark:bg-dark-1`} />
                    <button className="ml-auto" onClick={() => setPinned(!pinned)}>
                        {pinned ?
                            <RiPushpin2Fill size={28} />
                            :
                            <RiPushpin2Line size={28} />
                        }

                    </button>

                </section>
                <input type="text" placeholder="Take a note..." className={`h-[57px] p-2 outline-none  bg-white dark:bg-dark-1 dark:text-white `} />
                <div className="flex">
                    {chosenLabels?.map(chosenLabel => <div key={chosenLabel?._id} className="p-1 rounded-lg m-1 bg-selected-navitem-light dark:bg-selected-navitem-dark">
                        <span>{chosenLabel.labelName}</span>
                        <button className="text-xs p-2" onClick={() => dispatch(removeFromChosenLabels({ removedLabel: chosenLabel }))}>X</button>
                    </div>)
                    }
                </div>
                <section className="p-2 flex w-[50%] justify-between mt-1">
                    <div title="Change color" className="group" >
                        <IoColorPaletteSharp size={22} />
                        {/* <div className=" relative hidden group-hover:block">
                          
                            <div className="flex absolute border-2 rounded border-selected-navitem-light dark:border-selected-navitem-dark">
                                <div onClick={() => setNoteColor(() => localStorage.getItem("theme") === "dark" ? "black" : "white")} className={`${localStorage.getItem("theme") === "dark" ? "text-black" : "text-white"} border border-black dark:border-white rounded-full w-8 h-8 m-1`}>
                                </div>
                                {noteColors.map(singleColor =>
                                
                                    <div onClick={() => setNoteColor(singleColor)} key={singleColor} className={`bg-${singleColor} border border-black dark:border-white  rounded-full w-8 h-8 m-1`}>
                                    </div>
                        
                                )}
                            </div>
                        </div> */}

                    </div>

                    {/* <button title="Add Label">
                        <MdLabel size={22} />
                    </button> */}
                    <LabelModal />
                    <label className="cursor-pointer" title="Choose Image">
                        <BiImageAlt size={22} />
                        <input type="file" id="img"
                            name="img"
                            accept="image/*"
                            className="hidden" />
                    </label>



                </section>
            </form>
        </div>
    )
}