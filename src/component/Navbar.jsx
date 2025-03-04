import { useState } from "react";
import {Link} from "react-scroll"
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <nav className="p-4 text-purple-400 border-b-2 border-dotted bg-black">
      <div className="container mx-auto flex justify-between items-center px-5">
        <div className="text-[32px] font-bold font-pacifico text-white">
          <span className="text-purple-500">A</span>denike
        </div>
      
        <div className="md:hidden z-50">
          {showSideBar ? (
            <FiX className="text-3xl cursor-pointer text-white" onClick={() => setShowSideBar(false)} />
          ) : (
            <FiMenu className="text-3xl cursor-pointer text-white" onClick={() => setShowSideBar(true)} />
          )}
        </div>
      
        <ul className="hidden md:flex space-x-6">
          <li><Link to="home" smooth={true} duration={500} className="hover:border-2 hover:border-purple-400 hover:bg-purple-900 hover:text-white hover:rounded-full px-4 py-2 transition duration-300 cursor-pointer">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="hover:border-2 hover:border-purple-400 hover:bg-purple-900 hover:text-white hover:rounded-full px-4 py-2 transition duration-300 cursor-pointer">About</Link></li>
          <li><Link to="Projects" smooth={true} duration={500} className="hover:border-2 hover:border-purple-400 hover:bg-purple-900 hover:text-white hover:rounded-full px-4 py-2 transition duration-300 cursor-pointer">Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="hover:border-2 hover:border-purple-400 hover:bg-purple-900 hover:text-white hover:rounded-full px-4 py-2 transition duration-300 cursor-pointer">Contact</Link></li>
        </ul>
      </div>

     
      {showSideBar && (
        <div className="fixed top-0 left-0 w-2/3 h-full bg-gray-900 p-5 flex flex-col space-y-6 shadow-lg md:hidden">
          <ul>
            <li><Link to="home" smooth={true} duration={500} className="block py-2 px-4 hover:border-2 hover:border-purple-400 hover:bg-purple-900 hover:text-white hover:rounded-full transition duration-300 cursor-pointer" onClick={() => setShowSideBar(false)}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500} className="block py-2 px-4 hover:border-2 hover:border-purple-400 hover:bg-purple-900 hover:text-white hover:rounded-full transition duration-300 cursor-pointer" onClick={() => setShowSideBar(false)}>About</Link></li>
            <li><Link to="Projects" smooth={true} duration={500} className="block py-2 px-4 hover:border-2 hover:border-purple-400 hover:bg-purple-900 hover:text-white hover:rounded-full transition duration-300 cursor-pointer" onClick={() => setShowSideBar(false)}>Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={500} className="block py-2 px-4 hover:border-2 hover:border-purple-400 hover:bg-purple-900 hover:text-white hover:rounded-full transition duration-300 cursor-pointer" onClick={() => setShowSideBar(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
