import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: "-50%", rotate: -10, scale: 0.9 },
  visible: { 
    opacity: 1, 
    x: "0%", 
    rotate: 0, 
    scale: 1, 
    transition: { duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 } 
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Skilloval = ({ index, header, desc, position }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className={`relative w-full flex ${position === "left" ? "justify-start" : "justify-end"}`}
    >
      <div className={`relative w-full max-w-2xl ${position === "left" ? "md:ml-8" : "md:mr-8"}`}>
        
        {/* Responsive SVG */}
        <svg 
          className="w-full h-auto max-w-[600px] md:max-w-[500px]" 
          viewBox="0 0 848 736" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M835 299.053C946.421 605.871 285.529 736 122.443 736C-40.6431 736 6.25148 332.887 6.25148 151.323C6.25148 -30.2408 267.104 -9.55398 442.131 18.1584C624.164 46.9802 770.621 121.774 835 299.053Z" fill="black"/>
        </svg>

        <div
          className={`absolute inset-0 flex ${
            position === "left" ? "flex-col items-start pl-8 md:pl-12" : "flex-col items-end pr-8 md:pr-60"
          } justify-center text-white`}
        >
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold opacity-40 mb-1 md:mb-2"
          >
            {String(index).padStart(2, "0")}
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-4xl font-bold mb-1 md:mb-2"
          >
            {header}
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xs md:text-lg font-medium max-w-[240px] md:max-w-xs"
          >
            {desc}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skilloval;
