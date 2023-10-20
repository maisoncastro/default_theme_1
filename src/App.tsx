import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="main_container">
        <NavBar />
        <Hero />
        <Services />
      </div>
    </>
  );
}

export default App;
