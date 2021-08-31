import React from "react";
// import ReactDOM from "react-dom";

import { Header } from "./common/components/Header";
import { useTheme } from "./common/hooks/useTheme";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./common/components/Homepage";
const App = () => {
  return (
    <main className="text-black dark:text-white">
      <Routes>
        <Route path="//*" element={<Homepage />} />
        {/* <Route path="/home" element={<Homepage />} /> */}
      </Routes>
    </main>
  );
};

export default App;
