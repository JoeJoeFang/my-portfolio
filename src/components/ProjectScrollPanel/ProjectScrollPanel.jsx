import { useRef, useEffect, useState } from "react";
import "./ProjectScrollPanel.css"
import NameCard from "../NameCard/NameCard";
import Project from "../Projects/Project";
import BackGroundControl from "../BackGroundControl/BackGroundControl";

function ProjectScrollPanel(){
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function handleScroll() {
      setScrollY(container.scrollTop);
      console.log("Currtent ScrollY:", container.scrollTop);
    }

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);
  return (

    <div className="project-scroll-panel" style={{color: "#fff"}}>
      <div className="panel-white" ref={containerRef}
        style={{
        backgroundSize:
          scrollY > 150 && scrollY < 1600
            ? `${100 + (scrollY - 150) * 0.05}%`
            : "100%",
        backgroundPosition: "center",
        transition: "background-size 0.05s ease",
      }}>
        <NameCard scrollY={scrollY}/>
        <BackGroundControl ScrollY={scrollY}/>
        <Project scrollY={scrollY}/>
      </div>
    </div>
  )
}

export default ProjectScrollPanel;