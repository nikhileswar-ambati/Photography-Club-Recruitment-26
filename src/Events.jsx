import React from "react";

import ev1 from "./Photos/ev1.jpg";
import ev2 from "./Photos/ev2.jpg";
import ev3 from "./Photos/ev3.jpg";

function Events() {
  return (
    <section id="about" className="py-16 bg-amber-900 px-6 md:px-16">

      <h2 id="events" className="text-3xl md:text-4xl font-bold text-center mb-8 text-amber-300">
        Upcoming Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:scale-105 transition duration-300">
          <img
            src={ev1}
            className="w-full h-64 md:h-96 object-cover"
          />

          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center p-8 opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-2xl font-bold text-white">Photo Walk</h3>
            <p className="text-gray-200 mt-3">
              Explore the city and capture beautiful street moments.
              2nd April 2026, 12 PM, Mangalore
            </p>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:scale-105 transition duration-300">
          <img
            src={ev2}
            className="w-full h-64 md:h-96 object-cover"
          />

          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center p-8 opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-2xl font-bold text-white">
              Photography Workshop
            </h3>
            <p className="text-gray-200 mt-3">
              Learn capturing techniques and skills from experts.
              9th April 2026, 3 PM, NITK Seminar Hall
              </p>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:scale-105 transition duration-300">
          <img
            src={ev3}
            className="w-full h-64 md:h-96 object-cover"
          />

          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center p-8 opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-2xl font-bold text-white">Photo Expose</h3>
            <p className="text-gray-200 mt-3">
              Showcase the best photos captured by club members.
              28th April 2026, 10AM, NITK LHC-C CR2
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;