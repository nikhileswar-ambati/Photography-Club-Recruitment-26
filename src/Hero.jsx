import React from "react";
import cover from "./copy.avif";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center px-6"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-amber-800">
        Capture Moments
      </h1>

      <p className="text-xl md:text-3xl font-bold text-amber-800 mt-4 max-w-xl">
        Join our Photography Club
      </p>

      <button
        className="mt-6 bg-amber-300 px-6 py-3 md:px-8 md:py-4 rounded-lg text-lg 
        hover:bg-amber-800 hover:scale-110 transform transition duration-300"
      >
        Join Now
      </button>
    </section>
  );
}

export default Hero;
