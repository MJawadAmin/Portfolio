import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Additional from "./components/Additional";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="dark:bg-black bg-slate-200">
      <Home />
      <AboutMe />
      <Projects />
      <Experience />
      <Technologies />
      <Additional />
      <Footer />
    </div>
  );
}

export default App;
