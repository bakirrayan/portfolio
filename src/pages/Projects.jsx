import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../components/ProjectList";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project) => {
          return (
            <ProjectItem name={project.name} image={project.image} url={project.url} skills={project.skills} />
          );
        })}
      </div>
    </div>
    
  );
}

export default Projects;