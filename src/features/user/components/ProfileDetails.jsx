/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react"
// import { Account } from "../Account"
export function ProfileData({ account }) {
    const nameEl = useRef(null)

    useEffect(() => {
        console.log("useeffect running")
        if (nameEl.current !== null || undefined) {
            nameEl.current.value = account.name
        }
    }, [nameEl.current])
    console.log({ account })
    // nameEl.current.value = 
    return (
        // <div className="" >
        <form
        // onSubmit={AccountUpdateHandler}
        >
            <div className="border-4 p-2 border-selected-navitem-light dark:border-selected-navitem-dark flex flex-col justify-between w-[40vw] rounded m-4 my-8">
                <p className="font-bold text-left text-lg">Account</p>

                {/* {action.isLoading && (
                        <>
                            <div className="account-interaction-loader">
                                <SetLoader />
                            </div>
                            <div className="top-loading-bar">
                                <TopLoadingBar />
                            </div>
                        </>
                    )} */}
                {/* <p className={updateMessage.styleClass}>{updateMessage.message}</p> */}
                <section className="flex flex-col ">
                    <label className="text-left font-bold" htmlFor="name">
                        Name
                    </label>
                    <input
                        ref={nameEl}
                        // onChange={(e) => setNewUsername(e.target.value)}
                        name="name"
                        type="name"
                        className="input-box"
                        placeholder="name"
                        required
                    />
                </section>
                <section className="flex flex-col ">
                    <label className="text-left font-bold" htmlFor="username">
                        Username
                    </label>
                    <input
                        // ref={usernameEl}
                        // onChange={(e) => setNewUsername(e.target.value)}
                        name="username"
                        type="username"
                        className="input-box"
                        placeholder="username"
                        required
                    />
                </section>
                <section className="flex flex-col ">
                    <label className="text-left font-bold" htmlFor="email">
                        Email
                    </label>
                    <input
                        // ref={emailEl}
                        // onChange={(e) => setNewEmail(e.target.value)}
                        name="email"
                        type="email"
                        className="input-box"
                        placeholder="email"
                        required

                    />
                </section>
                <button type="submit" className=" my-2 self-start cursor-pointer h-10 w-40  rounded font-bold bg-selected-navitem-light dark:bg-selected-navitem-dark  ">
                    UPDATE
                </button>
            </div>
        </form>
        // </div>
    )
}