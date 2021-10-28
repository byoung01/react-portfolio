import React, { useState } from "react";
import Projects from "../Projects/";

import "bootstrap/dist/css/bootstrap.min.css";

function Repos() {
  const [projects] = useState([
    {
      name: "2Chit2Chat",
      description: "",
      repo: "https://github.com/byoung01/project-2",
      link: "https://appchat4us.herokuapp.com/",
    },
    {
      name: "Soundboard",
      description: "",
      repo: "https://github.com/athaight/group-project-one",
      link: "https://appchat4us.herokuapp.com/",
    },
    {
      name: "Budget Tracker",
      repo: "https://github.com/byoung01/budget-tracker",
      link: "https://progressive-budget24.herokuapp.com/",
    },
    {
      name: "E-commerce Backend",
      repo: "https://github.com/byoung01/e-commerce",
      link: "https://github.com/byoung01/e-commerce",
    },
    {
      name: "Weather Tracker",
      repo: "https://github.com/byoung01/weatherapp",
      link: "https://byoung01.github.io/weatherapp/",
    },
    {
      name: "Work Day",
      repo: "https://github.com/byoung01/Work-Day",
      link: "https://byoung01.github.io/Work-Day/",
    },
  ]);
  return (
    <div>
      <div
        style={{
          padding: "2em 1em",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {projects.map((project, id) => (
          <Projects project={project} key={id} />
        ))}
      </div>
    </div>
  );
}

export default Repos;
