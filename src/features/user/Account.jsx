import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PasswordHandler } from "./components/PasswordHandler";
import { ProfileData } from "./components/ProfileDetails";
import { fetchAccount } from "./userSlice";
export function Account() {
    const { account, accountStatus } = useSelector(state => state.user)
    const { authSetupStatus } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        if (accountStatus === "idle" && authSetupStatus) {
            dispatch(fetchAccount())
        }
    }, [accountStatus, authSetupStatus])
    return (
        account === null ?
            <div>loading</div> :
            <div>
                <h1 className="text-blue text-2xl font-bold m-2">{account.name}</h1>
                <div className="flex flex-col breakpoint-acc:flex-row justify-around  ">
                    <ProfileData account={account} />
                    <PasswordHandler />
                </div>
            </div>

    )
}