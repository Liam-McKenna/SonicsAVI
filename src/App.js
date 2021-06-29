//Components Navbar and globalstyles
import Navbar from "./components/Navbar";
import GlobalStyles from "./components/GlobalStyles";
//pages
import Services from "./pages/Services";
import ServiceFocus from "./pages/ServiceFocus";
import Projects from "./pages/Projects";
import ProjectFocus from "./pages/ProjectFocus";
import About from "./pages/About";
import Contact from "./pages/Contact";

//router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />

      <Switch>
        <Route path="/" exact>
          <Services />
        </Route>
        <Route path="/service/:id">
          <ServiceFocus />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/project/:id">
          <ProjectFocus />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
