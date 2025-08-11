import React from "react";
import "./App.css";
import ProjectScrollPanel from "./components/ProjectScrollPanel/ProjectScrollPanel";
import { Routes, Route } from "react-router-dom";
import ProjectTicketing from "./components/ProjectTicketing/ProjectTicketing";

function App() {
  return (
    <div className="App">
      <div className="container-space">
        <Routes>
            <Route path="/" element={<ProjectScrollPanel />} />
            <Route path="/projects/ticketing" element={<ProjectTicketing />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
