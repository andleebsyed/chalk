import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeToggle } from "./common/components/Header";
import { Homepage } from "./common/components/Homepage";
import { Landing } from "./common/components/Landing";
import { Login } from "./features/auth/login/Login";
const App = () => {
  const authorized = true;
  return (
    <main className="text-black dark:text-white">
      {authorized && (
        <div className="p-2 fixed  flex   min-w-screen right-0 h-9">
          <ThemeToggle />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home/*" element={<Homepage />} />
      </Routes>
    </main>
  );
};

export default App;
