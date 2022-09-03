import React from "react";


function ProjectItem({ image, name, url }) {
  return (
    <div
      className="projectItem"
      onClick={() => { window.open(url);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;