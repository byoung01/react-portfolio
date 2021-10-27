import React from "react";
import { Link } from "react-router-dom";
// import { Link, withRouter } from "react-router-dom";

function Nav() {
  return (
    <ul class="navbar-nav">
      <li class="nav-item nav-link">
        <Link to="/">About</Link>
      </li>
      <li class="nav-item nav-link">
        <Link to="/repos">Projects</Link>
      </li>
      <li class="nav-item nav-link">
        <Link to="/contact">Contact</Link>
      </li>
      <li class="nav-item nav-link">
        <Link to="/resume">Resume</Link>
      </li>
    </ul>
  );
}
export default Nav;
// export default withRouter(Nav);
