import React from "react";
import Resmue1 from "../../images/Joe Fang Resume_page1.jpg"
import Resmue2 from "../../images/Joe Fang Resume_page2.jpg"

export default function Resume() {
  return (
    <div className="project1-panel">
      <div className="panel1-white">
        <img src={Resmue1} alt="Resume1" />
        <img src={Resmue2} alt="Resume2" />
      </div>
    </div>  
  )
}