/* eslint-disable react/prop-types */
import React from "react"
import { IoColorPaletteSharp } from "react-icons/io5";
import { RiPushpin2Fill, RiPushpin2Line } from "react-icons/ri";
import { VscEdit } from 'react-icons/vsc'
import { LabelModal } from "../../common/components/LabelModal/LabelModal";
export function ShowNote({ note }) {
    function updateNote(e) {
        e.preventDefault()
    }
    return (
        <div className={`m-8 p-2 w-[90%] bg-white dark:bg-dark-1  max-w-[300px] min-h-[152px] rounded-lg  box-shadow-light dark:box-shadow-dark `}>

            <form className="flex flex-col p-2 outline-none  " onSubmit={(e) => updateNote(e)}>
                <section className="flex mb-1">
                    <input type="text" placeholder="Title" className={`h-[36px] w-full p-2 outline-none bg-white dark:bg-dark-1`}
                        // onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
                        value={note?.title}
                        readOnly
                        required />
                    <button className="ml-auto"
                        onClick={(e) => { e.stopPropagation(); e.preventDefault() }}
                    // onClick={() => setPinned(!pinned)}
                    >
                        {note?.pinned ?
                            <RiPushpin2Fill size={28} />
                            :
                            <RiPushpin2Line size={28} />
                        }

                    </button>

                </section>
                <input type="text" placeholder="Take a note..." className={`h-[57px] p-2 outline-none  bg-white dark:bg-dark-1 dark:text-white `} value={note?.content} readOnly
                    // onChange={(e) => setNoteData({ ...noteData, content: e.target.value })}
                    required />
                <div className="flex flex-wrap">
                    {note?.labels?.map(chosenLabel => <div key={chosenLabel?._id} className="text-sm p-1 pt-1 flex rounded-lg m-1 bg-selected-navitem-light dark:bg-selected-navitem-dark">
                        <span className="self-center">{chosenLabel.labelName}</span>
                        <button className="text-xs p-2 self-center"
                        //     onClick={() =>
                        //     dispatch(removeFromChosenLabels({ removedLabel: chosenLabel }))
                        // }`
                        >X</button>
                    </div>
                    )
                    }
                </div>
                {/* 
                <div className={`${imageData.showStatus} `}>
                    <button className="relative top-11 left-1 bg-red-600 bg-opacity-40 rounded p-2 " onClick={(e) => { e.preventDefault(); setImageData({ url: null, showStatus: "hidden" }); setImage(null) }}> <GiCancel size={26} /></button>

                    <img
                        ref={imageRef}
                        alt="selected file"
                        src={imageData.url}
                        className={`${imageData.showStatus}  self-center mb-4`}
                    />
                </div> */}

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
                    {/* <label className="cursor-pointer" title="Choose Image">
                        <BiImage size={22} />
                        <input type="file" id="img"
                            name="img"
                            accept="image/*"
                            className="hidden" onChange={fileUploadHandler} />
                    </label> */}



                </section>
                <button type="submit" className="ml-auto"><VscEdit size={25} /></button>
                {/* <input type="submit" value="Add Note" className="ml-auto bg-selected-navitem-light dark:bg-selected-navitem-dark rounded p-2 cursor-pointer" /> */}
            </form>
        </div>

    )
}