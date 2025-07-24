import { useRef, useEffect, useState } from "react";
import "./ProjectScrollPanel.css"
import NameCard from "../NameCard/NameCard";
import Project from "../Projects/Project";

function ProjectScrollPanel(){
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function handleScroll() {
      setScrollY(container.scrollTop);
      console.log("当前 scrollY:", container.scrollTop);
    }

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);
  return (

    <div className="project-scroll-panel" style={{color: "#fff"}}>
      <div className="panel-white" ref={containerRef}>
        <NameCard scrollY={scrollY}/>
        <Project scrollY={scrollY}/>
      </div>
    </div>
  )
}

export default ProjectScrollPanel;