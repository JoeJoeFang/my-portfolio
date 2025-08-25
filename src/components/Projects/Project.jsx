import React from "react";
import "./Project.css";
import project1 from "../../images/project1.jpg";
import project2 from "../../images/project2.jpg";
import project3 from "../../images/project3.jpg";
import project4 from "../../images/project4.jpg";
import { Link } from "react-router-dom";

function Project({ scrollY }) {
    const isFixed = scrollY > 1450 && scrollY < 2500;
    return (
        <div className="project">
            <div className="project-card">
                <div 
                    className="project-card__title"
                    style={{
                        position: isFixed ? 'fixed' : 'relative',
                        top: isFixed ? '30%': 'auto',
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
                    <Link to="/projects/ticketing" aria-label="website-detail">
                        <img src={project1} alt="Project1" />
                    </Link>
                </div>
                <div className="project-card__content2">
                    <Link to="/projects/intern" aria-label="website-detail">
                        <img src={project2} alt="Project1" />
                    </Link>
                </div>
                <div className="project-card__content3" onClick={() => window.open(" https://joejoefang.github.io/ProjectMagnifier/", "_blank")}>
                    <img src={project3} alt="Project3" />
                </div>
                <div className="project-card__content4" onClick={() => window.open(" https://joejoefang.github.io/portfolio-practice/", "_blank")}>
                    <img src={project4} alt="Project4" />
                </div>
            </div>
        </div>
    ) 
}

export default Project;