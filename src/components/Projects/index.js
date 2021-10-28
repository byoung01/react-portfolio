import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects({ project }) {
  const { name, repo, link } = project;
  return (
    <div className="card" style={{ width: "18rem", marginBottom: "1em" }}>
      <p className="card-text">{name}</p>
      <img
        style={{ width: "100%", maxWidth: "600px" }}
        src={require(`../../images/${name}.png`).default}
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <a className="card-text" href={repo} target="_blank">
          link
        </a>
        <a className="card-text" href={link} target="_blank">
          repo
        </a>
      </div>
    </div>
  );
}
export default Projects;
