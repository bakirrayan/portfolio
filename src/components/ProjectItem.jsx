import React from "react";


function ProjectItem({ image, name, url, skills }) {
  return (
    <div
      className="projectItem"
      onClick={() => { window.open(url);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      <p> {skills} </p>
    </div>
  );
}

export default ProjectItem;