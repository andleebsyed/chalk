import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword } from '../userSlice'

export function PasswordHandler() {
    const { updatePasswordStatus, error } = useSelector(state => state.user)
    const [passwords, setPasswords] = useState({})
    console.log({ error })
    const dispatch = useDispatch()
    function PasswordResetHandler(event) {
        event.preventDefault()
        console.log({ passwords })
        dispatch(updatePassword({ oldPassword: passwords.currentPassword, newPassword: passwords.newPassword }))

    }
    return (
        <form className=""
            onSubmit={(event) => PasswordResetHandler(event)}
        >
            <div className="border-4 p-2 theme-color-border flex flex-col justify-between m-4 sm:m-8 breakpoint-acc:m-4  breakpoint-acc:w-[40vw] rounded  breakpoint-acc:my-8">
                <p className="font-bold text-lg">Reset Password</p>

                {/* <p className={error ? "text-red-600 font-bold" : "text-blue font-bold"} >
                    {updatePasswordStatus}
                </p> */}
                {error ?
                    <p className="text-red-600 font-bold">{error}</p> :
                    <p className="text-blue font-bold">{updatePasswordStatus}</p>
                }

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
                            onChange={(e) => setPasswords({ ...passwords, currentPassword: e.target.value })}
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
                            onChange={(e) =>
                                setPasswords({ ...passwords, newPassword: e.target.value })
                            }
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
                        onChange={(e) =>
                            setPasswords({ ...passwords, confirmNewPassword: e.target.value })
                        }
                    />
                </div>
                <button type="submit" className="my-2 p-4 selected self-start rounded ">
                    UPDATE PASSWORD
                </button>
            </div>
        </form>
    )
}