import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./common/components/Homepage";
const App = () => {
  return (
    <main className="text-black dark:text-white">
      <Routes>
        <Route path="/home/*" element={<Homepage />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </main>
  );
};

export default App;
