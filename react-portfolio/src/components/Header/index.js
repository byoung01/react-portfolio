import React from "react";
import Nav from "../Nav";

// import "(style sheet)"
function Header() {
  document.title = Portfolio;

  return (
    <header>
      <div className="">
        <h1>Brevin Young</h1>
        <Nav></Nav>
      </div>
    </header>
  );
}

export default Header;
