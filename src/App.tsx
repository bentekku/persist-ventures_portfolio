import React, { Suspense, lazy, useState, useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import { motion } from "motion/react";

// Lazy load components for performance optimization
const Education = lazy(() => import("./components/Education"));
const Experiences = lazy(() => import("./components/Experiences"));
const Skills = lazy(() => import("./components/Skills"));

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Track cursor position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="font-heading">
      {/* Cursor-following Shape (Global) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none h-44 w-44 z-50 bg-gradient-custom rounded-full blur-xl"
        animate={{
          x: cursorPosition.x - 88, // Offset for centering the shape
          y: cursorPosition.y - 88,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 25,
          delay: 0.02, // Smooth delay
        }}
        aria-hidden="true"
      />

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
