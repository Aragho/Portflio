import React from "react";
import { GoDownload } from "react-icons/go";

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 max-w-3xl shadow-2xl text-center">
        <h2 className="text-4xl font-bold text-black">About Me</h2>
        <p className="mt-4 text-black leading-relaxed">
        I'm a passionate developer who enjoys creating clean, user-friendly, and engaging digital experiences. I love turning ideas into functional and visually appealing applications.
        </p>

        <div className="mt-12 flex justify-center">
          <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
            <img
              src="/images/officialpix.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-10">
          <a
            href="/pdf/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="ADETORO_ADENIKE_Resume"
            className="bg-purple-700 hover:bg-purple-950 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 transition hover:scale-105 shadow-lg w-full sm:w-auto max-w-[250px] mx-auto"
          >
            <GoDownload className="text-xl" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
