import React from "react";
// import ReactDOM from "react-dom";

import { Header } from "./common/components/Header";
import { useTheme } from "./common/hooks/useTheme";
const App = () => {
  return (
    <main className="text-black dark:text-white">
      <Header />
      <div className="text-center flex flex-col items-center min-h-screen justify-center container mx-auto">
        <h1>Welcome to cfhalk</h1>
      </div>
    </main>
  );
};

export default App;
