import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ContactCard from "./components/ContactCard";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <NavBar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <Projects />
        <About />
        <ContactCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
