import Navbar from "./Navbar";
import Hero from "./Hero";
import Events from "./Events";
import Gallery from "./Gallery";
import Contact from "./Contact";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Events />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
