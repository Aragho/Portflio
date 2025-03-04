import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {motion } from "framer-motion";



const Home = () => {
 
  return (
    <section id='About' className=" container mx-auto px-4 py-20 ">
      <div className="flex flex-col items-center text-center">
        
       
        <div
          className={`relative -z-10 w-56 h-56 md:w-72 md:h-72 cursor-pointer border-4 border-purple-500 shadow-lg rounded-full overflow-hidden transition-transform duration-700 ease-in-out transform
          }`}
        
        >
        
          <div className="absolute inset-0 flex justify-center items-center backface-hidden">
            <img
              src="/images/officialpix.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full "
            />
          </div>

      
        </div>

       
        <h1 className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-6">HELLO, MY NAME IS</h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          ADETORO <span className="text-purple-700">ADENIKE</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
          Frontend Developer | UI/UX Designer
        </p>
        <p className="w-full max-w-2xl text-sm sm:text-base md:text-lg text-black leading-relaxed">
         From Lagos, Nigeria, I specialize in Frontend Development and UI/UX Design, with some basic knowledge of Node.js and Express. With over a year of experience, I have worked on various projects, honing my skills in building responsive and user-friendly interfaces. I also have a solid understanding of data structures, algorithms, and Object-Oriented Programming, which helps me write efficient and scalable code.
        </p>

     
        <div className="flex gap-4 mt-6">
          <a href="#" className="w-12 h-12 flex items-center justify-center border-4 border-pink-600 rounded-full bg-pink-600 hover:scale-110 transform transition">
            <FaInstagram className="text-white w-6 h-6" />
          </a>
          <a href="https://github.com/Aragho" className="w-12 h-12 flex items-center justify-center border-4 border-black rounded-full hover:scale-110 transform transition">
            <FaGithub className="text-black w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/adenike-damilare" className="w-12 h-12 flex items-center justify-center border-4 border-white rounded-full bg-white hover:scale-110 transform transition">
            <FaLinkedin className="text-blue-700 w-6 h-6" />
          </a>
        </div>

        <div className="mt-6">
          <a
            href='/pdf/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            download="ADETORO_ADENIKE_Resume"
            className="bg-purple-700 hover:bg-purple-950 text-white px-6 py-3 rounded-full transform transition hover:scale-105 shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
