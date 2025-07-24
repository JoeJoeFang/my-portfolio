import React from "react";
import "./Project.css"
import project1 from "../../images/profile-pic.jpg";

function Project({ scrollY }) {
    const isFixed = scrollY > 1350 && scrollY < 2500;
    return (
        <div className="project">
            <div className="project-card">
                <div 
                    className="project-card__title"
                    style={{
                        position: isFixed ? 'fixed' : 'relative',
                        top: isFixed ? '20%': 'auto',
                        width: isFixed ? "25%" : "auto",
                    }} 
                >
                    <h3>PROJECTS:</h3>
                    <ul>
                        <li>Internship</li>
                        <li>Capstone Project</li>
                        <li>Personal Project</li>
                    </ul>
                </div>
                <div className="project-card__content1">
                    <img src={project1} alt="Project1" />
                </div>
                <div className="project-card__content2">
                    <img src={project1} alt="Project2" />
                </div>
                <div className="project-card__content3">
                    <img src={project1} alt="Project3" />
                </div>
                <div className="project-card__content4">
                    <img src={project1} alt="Project4" />
                </div>
            </div>
        </div>
    ) 
}

export default Project;