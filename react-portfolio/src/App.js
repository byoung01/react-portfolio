import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Repos from "./components/Repo";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Resume></Resume>
      <Repos></Repos>
      <Footer></Footer>
      <main></main>
    </div>
  );
}
export default App;
