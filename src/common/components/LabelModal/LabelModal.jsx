import React, { useState } from 'react'
import { MdLabel } from 'react-icons/md'
import { GiCancel } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { addLabel } from '../../../features/notes/notesSlice'
export function LabelModal() {
    const [modalStatus, setModalStatus] = useState(false)
    const [labelName, setLabelName] = useState(null)
    // const { account } = useSelector(state => state.user)
    const { labels } = useSelector(state => state.notes
    )
    const dispatch = useDispatch()
    function keyPressHandler(e) {
        if (e.key === "Enter") {
            console.log({ labelName })
            dispatch(addLabel({ labelName }))
        }

    }
    function onClickHandler(e) {

        console.log({ labelName }, e)
    }
    return (
        <div>
            <button title="Add Label" onClick={() => setModalStatus(!modalStatus)}>
                <MdLabel size={22} />
            </button>
            <section className={`absolute bg-white dark:bg-dark-1 min-h-[10rem] box-shadow-light dark:box-shadow-dark ${modalStatus ? "block" : "hidden"} `}>
                <div className="relative flex min-w-[14rem] p-2">
                    <p>Add a Label</p>
                    <button className="ml-auto hover:bg-red-600 rounded-full h-6 w-6 " onClick={() => setModalStatus(false)}>
                        <GiCancel size={26} />
                    </button>
                </div>
                <div className="p-2">
                    {labels?.map((label) => (
                        <div className="relative" key={label._id}>
                            <input
                                type="checkbox"
                            // checked={checkForIdInPlaylist(playlist.videos, video.id)}
                            // onChange={() => checkboxHandler(playlist, video)}
                            />
                            <label>{label.labelName}</label>
                        </div>
                    ))}
                </div>
                <div className="absolute w-full bottom-0 flex justify-around bg-white dark:bg-dark-1 ">

                    <input
                        type="text"
                        id="input"
                        // ref={inputEl}
                        placeholder="Add new..."
                        className="bg-white dark:bg-dark-1 border dark:border-selected-navitem-dark border-selected-navitem-light outline-none"
                        onChange={(e) => setLabelName(e.target.value)}
                        onKeyPress={(e) => keyPressHandler(e)}
                    />
                    <button
                        className="bg-selected-navitem-light dark:bg-selected-navitem-dark p-2"
                        onClick={(e) => onClickHandler(e)}
                    >
                        Add
                    </button>
                </div>

            </section>
        </div>
    )
}