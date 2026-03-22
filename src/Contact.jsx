import React from "react";
function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 text-center bg-amber-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        Contact Us
      </h2>

      <p className="text-lg md:text-2xl text-amber-300">
        <a href="mailto:photographyclub@nitk.edu.in" className="text-amber-300 hover:text-amber-400">
          Email: photographyclub@nitk.edu.in
        </a>
      </p>
    </section>
  );
}

export default Contact;
