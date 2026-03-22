import React from "react";
import events1 from "./events1.jpg";
import events2 from "./events2.jpg";
import events3 from "./events3.jpg";
import nature1 from "./nature1.jpg";
import nature2 from "./nature2.jpg";
import nature3 from "./nature3.jpg";
import wildlife1 from "./wildlife1.jpg";
import wildlife2 from "./wildlife2.jpg";
import wildlife3 from "./wildlife3.jpg";
import pot1 from "./pot1.jpg";
import pot2 from "./pot2.jpg";
import pot3 from "./pot3.jpg";

function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 md:px-10 bg-amber-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-amber-300">
        Gallery
      </h2>

      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-amber-300 hover:text-blue-200">
          Nature
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src={nature1}
            className="rounded-lg hover:scale-105 transition duration-300"
          />
          <img
            src={nature2}
            className="rounded-lg hover:scale-105 transition duration-300"
          />
          <img
            src={nature3}
            className="rounded-lg hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-amber-300 hover:text-blue-200">
          Wildlife
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src={wildlife1}
            className="rounded-lg hover:scale-105 transition duration-300"
          />
          <img
            src={wildlife2}
            className="rounded-lg hover:scale-105 transition duration-300"
          />
          <img
            src={wildlife3}
            className="rounded-lg hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-amber-300 hover:text-blue-200">
          Events
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src={events1}
            className="rounded-lg hover:scale-105 transition duration-300"
          />
          <img
            src={events2}
            className="rounded-lg hover:scale-105 transition duration-300"
          />
          <img
            src={events3}
            className="rounded-lg hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-6 text-amber-300 hover:text-blue-200">
          Potraits
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src={pot1}
            className="rounded-lg hover:scale-105 transition duration-300 object-cover"
          />
          <img
            src={pot2}
            className="rounded-lg hover:scale-105 transition duration-300 object-cover"
          />
          <img
            src={pot3}
            className="rounded-lg hover:scale-105 transition duration-300 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
