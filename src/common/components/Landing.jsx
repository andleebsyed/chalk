import React from "react";
import landing from "../../assets/landing.svg";
export function Landing() {
  return (
    <div className="flex flex-col min-h-screen  justify-center ">
      <div className="flex flex-col-reverse sm:flex-row">
        <img src={landing} className="mr-4 sm:w-[50%] sm:h-[50%] self-start" />
        <div className="m-2">
          <h1 className=" font-extrabold text-4xl  text-yellow-main self-end">
            Chalk
          </h1>
          <h1 className="font-medium text-2xl">All notes at one place</h1>
        </div>
      </div>

      <div className="text-center m-2">
        <p className="text-3xl">Join Now!</p>
        <div className="flex flex-col flex-wrap  items-center">
          <button className="button selected hover:bg-opacity-100 m-2">
            Login
          </button>
          <button className="button selected m-2">Signup</button>
        </div>
      </div>
    </div>
  );
}
