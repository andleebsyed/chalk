import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
// import {
//   setUpAuthHeaderForServiceCalls,
//   UserSignIn,
// } from "../../services/users/users";

// import { setToken } from "./userSlice";
// import { ProgressBar } from "../../common/components/Loaders/Progress";
export function Login() {
  // const navigate = useNavigate();
  // const [userDetails, setUserDetails] = useState({});
  // const [error, setError] = useState({ message: "", status: "hidden" });
  // const [buttonText, setButtonText] = useState("Login");
  // const dispatch = useDispatch();
  // const { progressBarStatus } = useSelector((state) => state.posts);
  // async function LoginHandler(e) {
  //   e.preventDefault();
  //   setButtonText("Logging you in...");
  //   const response = await UserSignIn(userDetails);
  //   setButtonText("Login");
  //   if (response.status && response.allowUser) {
  //     setUpAuthHeaderForServiceCalls(response.token);
  //     localStorage.setItem("token", response.token);
  //     localStorage.setItem("userId", response.userId);
  //     dispatch(setToken());
  //     navigate("/home", { replace: true });
  //   }
  //   if (!response.allowUser) {
  //     setError({
  //       ...error,
  //       message: "username/password incorrect",
  //       status: "block",
  //     });
  //   }
  // }
  return (
    <div className="flex-col">
      {/* {progressBarStatus && <ProgressBar />} */}
      <div className="flex-col">
        <div className=" flex justify-center ">
          <main className="flex flex-col p-4 justify-between  mt-4 flex-1 max-w-sm ">
            <h1 className="font-extrabold text-2xl ">Login to Chalk</h1>
            <form
              className="flex flex-col justify-between   h-80  "
              // onSubmit={LoginHandler}
            >
              <div className="flex flex-col mt-4">
                {/* <p className={`${error.status}`}>{error.message}</p> */}
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  className="input-box"
                  autoComplete="off"
                  required
                  // onChange={(e) =>
                  //   setUserDetails({ ...userDetails, username: e.target.value })
                  // }
                />
              </div>
              <div className="flex flex-col">
                <label>Password</label>
                <input
                  required
                  type="password"
                  name="password"
                  className="input-box"
                  // onChange={(e) =>
                  //   setUserDetails({ ...userDetails, password: e.target.value })
                  // }
                />
              </div>

              <input
                type="submit"
                value={`Login`}
                className=" button selected self-center"
              />
            </form>
            <section className="flex  justify-center mt-4">
              <Link to="#">
                <button>New Here?</button>
              </Link>

              <span className="pl-1 pr-1">.</span>
              <Link to="/signup">
                <button className="underline">Sign Up</button>
              </Link>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}