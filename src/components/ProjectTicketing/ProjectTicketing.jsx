import React from "react";
import "./ProjectTicketing.css";

export default function ProjectTicketing() {
  return (
    <div className="project1-panel">
      <div className="panel1-white">
        <h1 style={{ textAlign: "center" }}>Ticket Booking Website (Capstone)</h1>
        <div className="project1-grid">
          <section style={{ margin: "0 3rem", gridArea: "a" }}>
            <h2>Frontend</h2>
            <ul>
              <li><strong>Framework:</strong> React 18 (built with Create React App)</li>
              <li><strong>Routing:</strong> React Router DOM v6 for Single Page Application (SPA) navigation and nested routes</li>
              <li><strong>UI Library:</strong> MUI (Material UI v5) + Emotion (CSS-in-JS solution)
                <ul>
                  <li>Rapid development of responsive interfaces</li>
                  <li>Supports theming and dynamic styling</li>
                </ul>
              </li>
              <li><strong>Interactions & Animations:</strong>
                <ul>
                  <li>React Slick + Slick Carousel (event image sliders)</li>
                  <li>MUI animations (buttons, transitions)</li>
                </ul>
              </li>
              <li><strong>Data Fetching:</strong> Axios (communication with Flask API backend)</li>
              <li><strong>Date &amp; Time Handling:</strong> Day.js (date/time formatting, calendar components)</li>
              <li><strong>Password Security:</strong> Zxcvbn (password strength checking)</li>
              <li><strong>Build Tool:</strong> React Scripts (bundling, building, optimization)</li>
            </ul>
          </section>

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
              <li><strong>Data Validation:</strong> Marshmallow (data serialization and validation)</li>
            </ul>
          </section>

          <section style={{ margin: "0 3rem", gridArea: "c" }}>
            <h2>Deployment</h2>
            <ul>
              <li><strong>Frontend Hosting:</strong> GitHub Pages (static asset hosting)</li>
              <li><strong>Backend Hosting:</strong> Render (Flask API hosting)</li>
              <li><strong>Database Hosting:</strong> Render PostgreSQL</li>
            </ul>
          </section>

          <section style={{ margin: "0 3rem", gridArea: "d" }}>
            <button onClick={() => window.open("https://joejoefang.github.io/my-ticket-frontend/", "_blank")}>
              Ticket Booking Website
            </button>
          </section>
        </div> 
        {/* <section style={{ margin: "0 3rem" }}>
          <h3>技术要点</h3>
          <ul>
            <li>前端：React + 路由、组件化、动画（简述你的动画实现）</li>
            <li>后端：API 设计、认证鉴权、分页/缓存/日志（按你实际写）</li>
            <li>部署：前端 GitHub Pages/Render，后端 Render + CORS 配置</li>
          </ul>
        </section> */}
      </div>
    </div>
  );
}