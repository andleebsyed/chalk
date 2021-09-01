import React from "react";
import { Route, Routes } from "react-router";
import { Notes } from "../../features/notes/AllNotes";
export function Homepage() {
  function HomeContent() {
    return (
      <div className="text-center flex flex-col items-center min-h-screen justify-center container mx-auto">
        <h1>Welcome to chalk</h1>
      </div>
    );
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>

    </div>
  );
}
