import React from "react";

function Resume() {
  return (
    <div style={{ margin: "0 2em 0 2em" }}>
      <h3>Front end experience</h3>
      <ul class="list-group list-group-flush" style={{ marginBottom: "2em" }}>
        <li class="list-group-item">HTML</li>
        <li class="list-group-item">CSS</li>
        <li class="list-group-item">JavaScript</li>
        <li class="list-group-item">Node</li>
        <li class="list-group-item">React</li>
      </ul>
      <h3>Back end experience</h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">SQL</li>
        <li class="list-group-item">Express</li>
        <li class="list-group-item">Node</li>
        <li class="list-group-item">MongoDB</li>
      </ul>
    </div>
  );
}
export default Resume;
