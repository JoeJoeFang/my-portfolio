import React from 'react';
import './SectionIntern.css'

function SectionIntern() {
  return (<div className='intern' onClick={() => (window.location.href = "https://joejoefang.github.io/my-resume")} style={{cursor: "pointer"}}>
            <img className="pic-intern" src="/my-portfolio/images/homepage-background_left_top.jpg" alt="Intern" />
          </div>)
}

export default SectionIntern;