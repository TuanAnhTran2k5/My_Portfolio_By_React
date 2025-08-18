import React from "react";
import "./index.scss";
function ProjectCard({ img, nameProject }) {
  return (
  
      <div className="card">
        <img
          src={img}
          alt=""
        />
        <h3>{nameProject}</h3>
      </div>
   
  );
}

export default ProjectCard;
