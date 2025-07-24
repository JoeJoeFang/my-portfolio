import React from 'react';
import './SectionCenter.css'

function SectionCenter() {
  return (<div className='center' onClick={() => (window.location.href = "https://joejoefang.github.io/my-resume")} style={{cursor: "pointer"}}>
            <img className="pic" src="/my-portfolio/images/homepage-background_mid.jpg" alt="center" />
            <img 
            src={require("../../images/profile-pic.jpg")}
            alt="My portrait"
            className="avatar"
            />
          </div>)
}

export default SectionCenter;