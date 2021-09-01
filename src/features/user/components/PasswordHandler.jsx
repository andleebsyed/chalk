import React from 'react'

export function PasswordHandler() {
    return (
        <form className=""
        // onSubmit={PasswordResetHandler}
        >
            <div className="border-4 p-2 theme-color-border flex flex-col justify-between m-4 sm:m-8 breakpoint-acc:m-4  breakpoint-acc:w-[40vw] rounded  breakpoint-acc:my-8">
                <p className="font-bold text-lg">Reset Password</p>
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

                {/* <p className={passwordUpdateMessage.styleClass}>
                    {passwordUpdateMessage.message}
                </p> */}

                <div className=" ">
                    <div className="flex flex-col">
                        <label className="font-bold" htmlFor="currentPassword">
                            Current Password
                        </label>
                        <input
                            name="currentPassword"
                            type="password"
                            className="input-box"
                            required
                        // onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold" htmlFor="newPassword">
                            New Password
                        </label>
                        <input
                            name="newPassword"
                            type="password"
                            className="input-box "
                            required
                        // onChange={(e) =>
                        //     setNewPasswords({
                        //         ...newPasswords,
                        //         newPassword: e.target.value,
                        //     })
                        // }
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="font-bold" htmlFor="confirmPassword">
                        Confirm New Password
                    </label>
                    <input
                        name="confirmPassword"
                        type="password"
                        className="input-box"
                        required
                    // onChange={(e) =>
                    //     setNewPasswords({
                    //         ...newPasswords,
                    //         confirmNewPassword: e.target.value,
                    //     })
                    // }
                    />
                </div>
                <button type="submit" className="my-2 p-4 selected self-start rounded ">
                    UPDATE PASSWORD
                </button>
            </div>
        </form>
    )
}