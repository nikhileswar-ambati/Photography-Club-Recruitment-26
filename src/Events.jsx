import React from "react";
function Events() {
  return (
    <section id="about" className="py-24 bg-amber-800 px-6 md:px-16">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-300">
          About Our Club
        </h2>

        <p className="max-w-4xl mx-auto text-amber-200">
          The Photography Club of NITK is a creative community of students
          passionate about capturing moments through the lens. The club
          organizes photo walks, workshops, and exhibitions.
        </p>
      </div>

      <h2 id="events" className="text-3xl md:text-4xl font-bold text-center mb-14 text-amber-300">
        Upcoming Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:scale-105 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            className="w-full h-64 md:h-96 object-cover"
          />

          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center p-8 opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-2xl font-bold text-white">Photo Walk</h3>
            <p className="text-gray-200 mt-3">
              Explore the city and capture beautiful street moments.
            </p>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:scale-105 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
            className="w-full h-64 md:h-96 object-cover"
          />

          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center p-8 opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-2xl font-bold text-white">
              Photography Workshop
            </h3>
            <p className="text-gray-200 mt-3">
              Learn camera techniques and editing skills from experts.
            </p>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:scale-105 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
            className="w-full h-64 md:h-96 object-cover"
          />

          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center p-8 opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-2xl font-bold text-white">Photo Exhibition</h3>
            <p className="text-gray-200 mt-3">
              Showcase the best photos captured by club members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
