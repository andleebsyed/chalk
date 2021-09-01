import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileData } from "./components/ProfileDetails";
import { fetchAccount } from "./userSlice";
export function Account() {
    const { account, accountStatus } = useSelector(state => state.user)
    const { authSetupStatus } = useSelector(state => state.auth)
    console.log({ authSetupStatus })
    const dispatch = useDispatch()
    useEffect(() => {
        if (accountStatus === "idle" && authSetupStatus) {
            console.log("am i running")
            dispatch(fetchAccount())
        }
    }, [accountStatus, authSetupStatus])
    return (
        account === null ?
            <div>loading</div> :
            <div className="flex justify-around items-center">
                <ProfileData account={account} />
                {/* < */}
            </div>
    )
}