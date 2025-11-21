import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-8 text-gray-300">
          I'm open to freelance work, internships, or collaboration on exciting projects.
          Feel free to reach out!
        </p>

        <div className="flex justify-center gap-6 text-xl">
          <a
            href="mailto:your.email@example.com"
            className="hover:text-blue-400 transition"
            aria-label="Email"
          >
            <FaEnvelope />
                 keshavofficial57@gmail.com
          </a><br/>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
       
          </a><br/>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;