import { useEffect, useState } from "react";
import "./App.css";

import OutputWindow from "./components/OutputWindow";

function App() {
  return (
    <div className="app | flex min-h-screen bg-gray-800">
      <OutputWindow />
    </div>
  );
}

export default App;
