import React, { Suspense, lazy } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

// Lazy load components for performance optimization
const Education = lazy(() => import("./components/Education"));
const Experiences = lazy(() => import("./components/Experiences"));
const Skills = lazy(() => import("./components/Skills"));

const App = () => {
  return (
    <div className="font-heading">
      {/* Navigation */}
      <Nav />

      {/* Main Content Section */}
      <main>
        <Hero />

        {/* Suspense is used for lazy-loaded components */}
        <Suspense fallback={<div>Loading...</div>}>
          <Experiences />
          <Education />
          <Skills />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
