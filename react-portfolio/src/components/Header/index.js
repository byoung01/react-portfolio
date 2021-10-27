import React from "react";
import Nav from "../Nav";
import "bootstrap/dist/css/bootstrap.min.css";

// import "(style sheet)"
function Header() {
  document.title = "Portfolio";

  return (
    <header>
      <div
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ paddingLeft: "2em", paddingRight: "2em", marginBottom: "5em" }}
      >
        <h1 className="navbar-brand">Brevin Young</h1>
        <Nav></Nav>
      </div>
    </header>
  );
}

export default Header;

/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  */
