import React, { useState } from "react"
import { RiPushpin2Line } from 'react-icons/ri'
import { IoColorPaletteSharp } from 'react-icons/io5'
import { MdLabel } from 'react-icons/md'
import { BiImageAlt } from 'react-icons/bi'
import { RiPushpin2Fill } from 'react-icons/ri'
export function CreateNote() {
    const [pinned, setPinned] = useState(false)
    return (
        <div className=" m-8  p-2 w-[90%]  max-w-[600px] h-[152px] rounded-lg box-shadow-light dark:box-shadow-dark bg-opacity-20">

            <form className="flex flex-col p-2 outline-none " onSubmit={(e) => e.preventDefault()}>
                <section className="flex mb-1">
                    <input type="text" placeholder="Title" className="h-[36px] w-full p-2 outline-none dark:bg-dark-1 dark:text-white" />
                    <button className="ml-auto" onClick={() => setPinned(!pinned)}>
                        {pinned ?
                            <RiPushpin2Fill size={28} />
                            :
                            <RiPushpin2Line size={28} />
                        }

                    </button>

                </section>
                <input type="text" placeholder="Take a note..." className="h-[57px] p-2 outline-none dark:bg-dark-1 dark:text-white" />
                <section className="p-2 flex w-[50%] justify-between mt-1">
                    <button title="Change color">
                        <IoColorPaletteSharp size={22} />
                    </button>
                    <button title="Add Label">
                        <MdLabel size={22} />
                    </button>
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