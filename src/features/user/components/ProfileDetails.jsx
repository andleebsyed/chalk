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
        <div>
            <form
            // onSubmit={AccountUpdateHandler}
            >
                <div className="profile-details width-adjust">
                    <p className="label">Account</p>

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
                    <div className="holder">
                        <label className="labels-acc" htmlFor="name">
                            Name
                        </label>
                        <input
                            ref={nameEl}
                            // onChange={(e) => setNewUsername(e.target.value)}
                            name="name"
                            type="name"
                            className="input-box acc-username"
                            placeholder="name"
                            required
                        />
                    </div>
                    <div className="holder">
                        <label className="labels-acc" htmlFor="username">
                            Username
                        </label>
                        <input
                            // ref={usernameEl}
                            // onChange={(e) => setNewUsername(e.target.value)}
                            name="username"
                            type="username"
                            className="input-box acc-username"
                            placeholder="username"
                            required
                        />
                    </div>
                    <div className="holder">
                        <label className="labels-acc" htmlFor="email">
                            Email
                        </label>
                        <input
                            // ref={emailEl}
                            // onChange={(e) => setNewEmail(e.target.value)}
                            name="email"
                            type="email"
                            className="input-box acc-password"
                            placeholder="email"
                            required

                        />
                    </div>
                    <button type="submit" className="submit-button ">
                        UPDATE
                    </button>
                </div>
            </form>
        </div>
    )
}