import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <footer className="bg-amber-900 text-center py-10">
      <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>

      <p className="text-amber-300 mb-6">
        Email: 
      <a href="mailto:photographyclub@nitk.edu.in" className="text-amber-300 hover:text-blue-500">
        photographyclub@nitk.edu.in
      </a>
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="https://www.instagram.com/nitkphotography/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 text-3xl hover:scale-125 transition"
        >
          <FaInstagram />
        </a>
<a
          href="https://in.linkedin.com/company/photography-club-nitk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-3xl hover:scale-125 transition"
        >
          <FaLinkedin />
        </a>
      </div>

      <p className="text-sm text-gray-300 mt-6">
        © {new Date().getFullYear()} NITK Photography Club
      </p>
    </footer>
  );
}

export default Contact;
