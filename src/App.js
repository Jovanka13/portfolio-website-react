import About from "./components/About";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="w-full h-full min-h-[100vh] bg-white overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;
