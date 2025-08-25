import React from "react";
import "./ProjectIntern.css";
import CompleteVideo from "../../images/Complete.mkv";

export default function ProjectIntern() {
  return (
    <div className="project1-panel">
      <div className="panel1-white">
        <h1 style={{ textAlign: "center", marginTop:"3rem" }}>Intern Project (Maqro)</h1>
        <div className="project2-grid">
          <section style={{ 
            display: "flex",
            margin: "0 3rem", 
            gridArea: "a", 
            justifyContent: "center"}}>
            <video
              src={CompleteVideo}
              controls   //
              autoPlay   // 
              loop       // 
              muted      //
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </section>
          <section style={{ 
            display: "flex",
            margin: "0 6rem", 
            gridArea: "b", 
            justifyContent: "center"}}>
            <h1>This project is built with Next.js 14 using the modern App Router architecture. It is fully written in TypeScript, styled with TailwindCSS, and enhanced with popular animation libraries</h1>
          </section>
{/* 
          <section style={{ margin: "0 3rem", gridArea: "b" }}>
            <h2>Backend</h2>
            <ul>
              <li><strong>Framework:</strong> Flask (Python microframework)</li>
              <li><strong>API Design:</strong> Flask-RESTful (RESTful API specification)</li>
              <li><strong>Database:</strong> PostgreSQL (relational database)</li>
              <li><strong>ORM:</strong> SQLAlchemy (database modeling and operations)</li>
              <li><strong>Authentication &amp; Authorization:</strong>
                <ul>
                  <li>JWT (JSON Web Token) for user authentication</li>
                  <li>Password hashing and secure storage (Werkzeug / bcrypt)</li>
                </ul>
              </li>

            </ul>
          </section>

          <section style={{ margin: "0 3rem", gridArea: "c" }}>
            <h2>Deployment</h2>
            <ul>
              <li><strong>Frontend Hosting:</strong> GitHub Pages (static asset hosting)</li>
              <li><strong>Backend Hosting:</strong> Render (Flask API hosting)</li>
              <li><strong>Database Hosting:</strong> Render PostgreSQL</li>
            </ul>
          </section> */}

          {/* <section style={{ 
            margin: "0 3rem", 
            gridArea: "d",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end"}}> */}
            {/* <button onClick={() => window.open("https://joejoefang.github.io/my-ticket-frontend/", "_blank")}>
              Ticket Booking Website
            </button> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-arrow-return-right" viewBox="1 1 16 16">
              <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"/>
            </svg>
            <button style={{marginLeft:"2rem"}} type="button" className="tech-button" onClick={() => window.open("https://joejoefang.github.io/my-ticket-frontend/", "_blank")}>Ticket Booking Website</button>
          </section> */}
        </div> 
      </div>
    </div>)
}