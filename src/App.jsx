import Home from "./component/home";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import "animate.css"



const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
