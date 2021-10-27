import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Repos from "./components/Repo";
import Contact from "./components/Contact";
import { Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <main>
        <Header />
        <Route exact path="/" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/repos" component={Repos} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </main>
    </div>
  );
}
export default App;

{
  /* <Header/>
<About/>
<Resume/>
<Repos/>
<Footer/> */
}
