import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="font-heading">
      <Nav />
      <Hero />
      <Education />
      <Experiences />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
