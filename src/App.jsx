import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Events from "./Events";
import Gallery from "./Gallery";
import Contact from "./Contact";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
