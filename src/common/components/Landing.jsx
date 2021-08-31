import React from "react";
import landing from "../../assets/landing.svg";
export function Landing() {
  return (
    <div className="flex flex-col min-h-screen ml-2 ">
      <div className="m-2">
        <h1 className=" font-extrabold text-4xl  text-yellow-main">Chalk</h1>
        <h1 className="font-medium text-2xl">All notes under one roof</h1>
      </div>

      <img src={landing} className="mr-2 sm:w-[50%] sm:h-[50%] self-center" />
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
