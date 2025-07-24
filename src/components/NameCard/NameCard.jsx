import React from "react";
import "./NameCard.css"
import profiler from "../../images/profile-pic.jpg"
import NameCardTitle from "../NameCardTitle/NameCardTitle"

function NameCard({ scrollY }) {
  return (
    <div className="name-card">
      {/* <div className="name-card__title">
        <h1>Turning Ideas into the<br/>Digital World</h1>
        <h3>Welcome to Joe's Digital Portfolio </h3> 
      </div> */}
      <NameCardTitle scrollY={scrollY}/>
      <div className="name-card__profile">
        <img src={profiler} alt="profiler"/>
        <h3>Joe's Resume</h3>
      </div>
      <div className="name-card__down">
        <h3>SCROLL DOWN</h3>
        <h3>TO FIND MORE</h3>
        <span >↓</span>
      </div>
      <div className="name-card__contact">
        <h3>CONTACT ME</h3>
        <h3>EMAIL: joe.jiazhoufang@gmail.com</h3>
        <h3>PHONE: 0448698624</h3>
      </div>
      <div className="name-card__subtitle">
        <h3>Homepage/Project/Contact</h3>
      </div>
    </div>
  )
}

export default NameCard;