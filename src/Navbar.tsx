import { useState } from "react";
import logo from "./logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-amber-800 text-yellow-400 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-12 md:w-16" />
          <h1 className="text-xl md:text-2xl font-bold">Photography Club</h1>
        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul className="hidden md:flex gap-8 text-xl">
          <li>
            <a href="#home" className="hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-white">
              Gallery
            </a>
          </li>
          <li>
            <a href="#events" className="hover:text-white">
              Events
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <ul className="flex flex-col gap-4 mt-4 text-lg md:hidden">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
