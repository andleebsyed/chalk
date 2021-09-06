import React, { useRef, useState } from 'react'
import { MdLabel } from 'react-icons/md'
import { GiCancel } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { addLabel, addToChosenLabels, removeFromChosenLabels, } from '../../../features/notes/notesSlice'
export function LabelModal() {

    const [modalStatus, setModalStatus] = useState(false)
    const [labelName, setLabelName] = useState(null)
    const inputEl = useRef(null)
    const { labels, chosenLabels } = useSelector(state => state.notes
    )
    const dispatch = useDispatch()
    async function keyPressHandler(e) {
        if (labelName.length > 0 && labelName.trim()) {
            if (e.key === "Enter") {
                await dispatch(addLabel({ labelName }))
                inputEl.current.value = ""
            }
        }


    }
    async function onClickHandler() {
        if (labelName.length > 0 && labelName.trim()) {
            await dispatch(addLabel({ labelName }))
            inputEl.current.value = ""
        }

    }

    function checkboxHandler({ checked, clickedLabel }) {
        // if (chosenLabelComponent !== "editNote") {
        //     dispatch(setChosenLabelComponent({ component: "createNote" }))
        // }
        // else {
        //     dispatch(setChosenLabelComponent({ component: "editNote" }))
        // }
        if (checked) {
            dispatch(addToChosenLabels({ newChosenLabel: clickedLabel }))
        }
        else {
            dispatch(removeFromChosenLabels({ removedLabel: clickedLabel }))
        }



    }

    function checkIfLabelChecked(label) {
        const ifPresent = chosenLabels?.filter((item) => item._id === label._id);
        return ifPresent?.length > 0 ? true : false;

    }
    return (
        <div className="flex flex-col">
            <button title="Add Label" onClick={(e) => { e.preventDefault(); setModalStatus(!modalStatus) }} className="self - center">
                < MdLabel size={22} />
            </button >
            {/* ${chosenLabelsComponent === "editNote" ? 'top-[28rem]' : 'top-[16rem]'} */}
            < section className={` absolute   bg-white dark:bg-dark-1 min-h-[13rem] p-2 box-shadow-light dark:box-shadow-dark ${modalStatus ? "block" : "hidden"} `
            }>
                <div className="relative flex min-w-[14rem] mb-1 overflow-y-auto">
                    <div className="flex flex-col">
                        <p className="mt-2">Add a Label</p>
                    </div>

                    <button className="ml-auto p-1  rounded-full text-gray-500 dark:text-white hover:bg-gray-500 hover:bg-opacity-40" onClick={(e) => { e.preventDefault(); setModalStatus(false) }}>
                        <GiCancel size={26} />
                    </button>
                </div>
                <div className=" max-h-[8rem] overflow-y-auto">
                    {labels?.map((label) => (
                        <div className="relative" key={label._id}>
                            <input
                                type="checkbox"
                                checked={checkIfLabelChecked(label)}
                                onChange={(e) => checkboxHandler({ checked: e.target.checked, clickedLabel: label })}

                            />
                            <label>{label.labelName}</label>
                        </div>
                    ))}
                </div>
                <div className=" w-full p-0 flex justify-around ">

                    <input
                        type="text"
                        id="input"
                        ref={inputEl}
                        placeholder="Add new..."
                        className="bg-white dark:bg-dark-1 border dark:border-selected-navitem-dark border-selected-navitem-light outline-none"
                        onChange={(e) => setLabelName(e.target.value)}
                        onKeyPress={(e) => keyPressHandler(e)}
                    />
                    <button
                        className="bg-selected-navitem-light dark:bg-selected-navitem-dark p-2 outline-none"
                        onClick={(e) => onClickHandler(e)}
                    >
                        Add
                    </button>
                </div>

            </section >
        </div >
    )
}