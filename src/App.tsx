import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="main_container">
        <NavBar />
        <Hero />
        <Services />
        <Projects />
      </div>
    </>
  );
}

export default App;
