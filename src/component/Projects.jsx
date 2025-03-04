import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { motion } from "framer-motion";
import { CiLink } from "react-icons/ci";

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);
  
  const projects = [
    { title: "E-commerce", description: "A fully functional e-commerce store." },
    { title: "Color Game", description: "A fun game based on color guessing." },
    { title: "Ticket Conference Generator", description: "Generate custom tickets for events." },
    { title: "To-Do-App", description: "A modern to-do list application." },
    { title: "AI-Powered-text-Processing-Interface", description: "An AI-powered text processing tool." },
  ];

  const github = {
    "E-commerce": "https://github.com/Aragho/RiaShop",
    "Color Game": "https://github.com/Aragho/color-game",
    "Ticket Conference Generator": "https://github.com/Aragho/conference-ticket-generator",
    "To-Do-App": "https://github.com/Aragho/TodoApp",
    "AI-Powered-text-Processing-Interface": "https://github.com/Aragho/AI_powered_text_processing_interface",
  };

  const livedemo = {
    "E-commerce": "https://ria-shop.vercel.app/",
    "Color Game": "https://color-game-hazel-seven.vercel.app/",
    "Ticket Conference Generator": "https://conference-ticket-generator-ashy.vercel.app/",
    "To-Do-App": "https://to-do-app-project.netlify.app/",
    "AI-Powered-text-Processing-Interface": "https://ai-powered-text-processing-interface-nu.vercel.app/", 
  };
  

  return (
    <motion.section 
   
   
    id="Projects" className="container mx-auto px-4 py-20 ">
      <h2 className="text-4xl font-bold text-black text-center mb-16">My Project</h2>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-2 py-z w-full">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={` bg-purple-900 relative flex flex-col rounded-2xl w-full h-[15rem] p-4 transform transition-all duration-500 
              hover:-translate-y-4 cursor-pointer  ${
                activeCard === index ? "ring-4 ring-blue-500" : ""
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              style={{
                transform:
                  activeCard === index
                    ? "perspective(1000px) rotateX(3deg) rotateY(3deg) scale(1.05)"
                    : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
                boxShadow:
                  activeCard === index
                    ? "0 25px 50px -12px rgba(59, 130, 246, 0.3)"
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-transparent opacity-10 rounded-2xl"></div>
              <div className="flex gap-4">
              <h3 className="text-2xl font-bold text-white mb-4 max-w-[240px]">{project.title}</h3>
              <p>
                 
              {livedemo[project.title] && (
                <a
                  href={livedemo[project.title]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg- rounded-md flex items-center justify-center w-full h-[2.9rem] text-white px-4 md:px-0 gap-2 font-medium transform transtion hover:scale-105 hover:shadow-xl italic "
                >
                  <CiLink className="text-lg" />
                  <p>Live Demo</p>
                </a>
              )}
              </p>

              </div>
              
              <p className="text-gray-400">{project.description}</p>
              <div className="flex-grow"></div>
            
                  
              <a
                href={github[project.title]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-black border-2 border-black  
                 rounded-md hover:scale-105 hover:shadow-xl 
                transform transition w-44 h-[2.9rem]"
              >
                <FaGithub className="text-lg" />
                GitHub
              </a>

             
            </div>

            <div className="flex flex-row justify-center items-center gap-2 lg:gap-4 mt-4 w-full max-w-[22rem] ">
              
             

            
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
