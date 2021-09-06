/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react"
import { BiImageAlt } from "react-icons/bi";
import { IoColorPaletteSharp } from "react-icons/io5";
import { RiPushpin2Fill, RiPushpin2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { LabelModal } from "../../common/components/LabelModal/LabelModal";
import { disableEditModal, removeFromChosenLabels, setUpLabelsInEditComponent } from "./notesSlice";
export function EditNote() {

    const { noteToEdit, editNoteModalStatus, chosenLabels, chosenLabelsComponent } = useSelector(state => state.notes)
    console.log(noteToEdit, editNoteModalStatus)
    const dispatch = useDispatch()
    const formRef = useRef(null)
    const [pinned, setPinned] = useState(false)
    const [noteData, setNoteData] = useState(null)
    const [image, setImage] = useState(null)
    const [imageData, setImageData] = useState({
        url: null,
        showStatus: "hidden",
    });

    useEffect(() => {
        if (noteToEdit) {
            dispatch(setUpLabelsInEditComponent({ labels: noteToEdit.labels }))
        }

    }, [noteToEdit])
    useEffect(() => {
        if (noteToEdit) {
            setNoteData({
                ...noteData, title: noteToEdit.title,
                content: noteToEdit.content,
                image: imageData.url ? imageData.url : noteToEdit.image,
                pinned: noteToEdit.pinned,
                labels: chosenLabels,
                color: null
            })

        }
    }, [noteToEdit, imageData])
    function submitNote(e) {
        e.preventDefault()
    }
    function fileUploadHandler(e) {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0])
            var reader = new FileReader();
            reader.onload = function (e) {
                setImageData({
                    ...imageData,
                    showStatus: "block",
                    url: e.target.result,
                });
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    }
    function closeModalHandler(e) {
        e.stopPropagation();
        setImageData({
            url: null,
            showStatus: "hidden",
        })
        dispatch(disableEditModal())
    }
    // function removeLabel(e, label) {
    //     e.preventDefault()
    //     const filteredLabels = noteData.labels.filter(singleLabel => singleLabel._id !== label._id)
    //     setNoteData({ ...noteData, labels: filteredLabels })

    // }
    return (
        editNoteModalStatus && noteData && <div onClick={(e) => closeModalHandler(e)} className="  fixed top-0 left-0 bottom-0 right-0  bg-dark-1 bg-opacity-50 flex items-center justify-center min-h-screen min-w-screen ">
            <div className={`self-center m-8 p-2 w-[90%] bg-white dark:bg-dark-1  max-w-[600px] min-h-[152px] rounded-lg  box-shadow-light dark:box-shadow-dark `} onClick={(e) => e.stopPropagation()}>
                {/* {error && <p className="text-red-600 font-bold pl-3">Could not save the note!! Your image size might be too big. Try changing the image or simply try again.</p>}
            {status === "success" && <p className="text-blue font-bold">Note saved successfully</p>}
            {status === "pending" && <p className="text-palette-yellow font-bold">Please wait while we save your note...</p>} */}
                <button onClick={(e) => closeModalHandler(e)}>X</button>
                <form ref={formRef} className="flex flex-col p-2 outline-none   " onSubmit={(e) => { e.stopPropagation(); submitNote(e) }}>
                    <section className="flex mb-1">
                        <input type="text" placeholder="Title" className={`h-[36px] w-full p-2 outline-none bg-white dark:bg-dark-1`} value={noteData.title} onChange={(e) => setNoteData({ ...noteData, title: e.target.value })} required />
                        <button className="ml-auto" onClick={(e) => { e.preventDefault(); setPinned(!pinned) }}>
                            {noteToEdit.pinned ?
                                <RiPushpin2Fill size={28} />
                                :
                                <RiPushpin2Line size={28} />
                            }
                        </button>
                    </section>
                    <input type="text" placeholder="Take a note..." className={`h-[57px] p-2 outline-none  bg-white dark:bg-dark-1 dark:text-white `} value={noteData.content} onChange={(e) => setNoteData({ ...noteData, content: e.target.value })} required />


                    {noteData.image && <div className="overflow-y-scroll max-h-[30rem]" ><img src={noteData.image} /></div>}
                    <div className="flex flex-wrap">
                        {chosenLabelsComponent === "editNote" && chosenLabels?.map(chosenLabel => <div key={chosenLabel?._id} className="text-sm p-1 pt-1 flex rounded-lg m-1 bg-selected-navitem-light dark:bg-selected-navitem-dark">
                            <span className="self-center">{chosenLabel.labelName}</span>
                            <button className="text-xs p-2 self-center" onClick={(e) => { e.preventDefault(); dispatch(removeFromChosenLabels({ removedLabel: chosenLabel })) }}>X</button>
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
                        <LabelModal />
                        <label className="cursor-pointer" title="Choose Image">
                            <BiImageAlt size={22} />
                            <input type="file" id="img"
                                name="img"
                                accept="image/*"
                                className="hidden" onChange={fileUploadHandler} />
                        </label>



                    </section>
                    <input type="submit" value="Edit Note" className="ml-auto bg-selected-navitem-light dark:bg-selected-navitem-dark rounded p-2 cursor-pointer" />
                </form>
            </div>
        </div>

    )
}
