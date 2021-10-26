import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects({ project }) {
  const { name, repo, link, description } = project;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <p className="card-text">{name}</p>
      {/* <img src="..." class="card-img-top" alt="..." /> */}
      <div className="card-body">
        <p className="card-text">{repo}</p>
        <p className="card-text">{link}</p>
      </div>
    </div>
  );
}
export default Projects;
