import React, { useState } from "react";
import { motion } from "framer-motion";
import roadRatingImg from "../assets/Screenshot 2025-03-28 021014.png";
import notesCalcImg from "../assets/Screenshot 2025-03-28 021747.png";
import readRushImg from "../assets/Screenshot 2025-03-28 021206.png";
import acCloneImg from "../assets/Screenshot 2025-03-28 021919.png";

const Projects = () => {
  const projects = [
    { 
      name: "ROAD RATING", 
      description: "An interactive map where users can review and rate roads providing feedback on their travel experiences",
      url: "https://amishra-d.github.io/road-rating-app/" 
    },
    { 
      name: "NOTESCALC", 
      description: "Smart note-taking app with built-in calculator",
      url: "https://amishra-d.github.io/practice/" 
    },
    { 
      name: "READ RUSH", 
      description: "A bookstore website designed for an enhanced reading experience and easy book discovery.",
      url: "https://amishra-d.github.io/ReadRush/" 
    },
    { 
      name: "ACCLONE", 
      description: "A WebRTC-based website enabling secure server calls and communication.",
      url: "https://amishra-d.github.io/cybersentinels/" 
    }
  ];
  
  const images = [roadRatingImg, notesCalcImg, readRushImg, acCloneImg];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-black w-full min-h-screen flex flex-col lg:flex-row items-start justify-between lg:justify-around z-40 p-4 md:p-8 gap-6 md:gap-8">
      <motion.div 
        className="flex flex-col w-full lg:w-[40%] xl:w-[35%] space-y-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="flex md:hidden gap-4 justify-center md:justify-start pb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projects.map((_, index) => (
            <motion.div
              key={index}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold cursor-pointer
                ${activeIndex === index ? "bg-[#CDEA68] text-black" : "bg-white/10 text-white/50"}`}
              onClick={() => setActiveIndex(index)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {index + 1}
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col space-y-6 gap-12 w-full">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="flex items-start gap-4 md:gap-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                className={`hidden md:flex w-10 h-10 rounded-full items-center justify-center text-lg font-bold cursor-pointer flex-shrink-0
                  ${activeIndex === index ? "bg-[#CDEA68] text-black" : "bg-white/10 text-white/50"}`}
                onClick={() => setActiveIndex(index)}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                initial={{ scale: 0.8, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 400, delay: index * 0.1 }}
              >
                {index + 1}
              </motion.div>

              <motion.div
                className="cursor-pointer flex-1 min-w-0"
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <motion.div
                  animate={{ 
                    scale: activeIndex === index ? 1.02 : 1,
                    color: activeIndex === index ? "#CDEA68" : "rgba(255,255,255,0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="text-2xl md:text-4xl font-bold truncate"
                >
                  {project.name}
                </motion.div>

                {activeIndex === index && (
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-white/70 mt-2 font-bold text-base md:text-lg"
                  >
                    {project.description}
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="w-full lg:w-[45%] xl:w-[40%] sticky top-4 md:top-8 h-[50vh] md:h-[70vh] flex items-center justify-center lg:ml-12 xl:ml-16"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative"
        >
          <motion.img
            src={images[activeIndex]}
            alt={`Project ${projects[activeIndex].name}`}
            className="max-w-full max-h-full object-contain rounded-lg cursor-pointer border-2 border-transparent hover:border-[#CDEA68]"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            key={activeIndex}
            onClick={() => handleImageClick(projects[activeIndex].url)}
          />
          <motion.div 
            className="absolute bottom-4 left-0 right-0 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;