import React from 'react';
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5
    }
  }
};

const Navbar = () => {
  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="font-brut w-full h-16 sm:h-20 md:h-24 fixed top-0 left-0 flex items-center justify-end px-4 sm:px-6 md:px-8 lg:px-10 z-50"
    >
      <motion.div 
        className="flex flex-row gap-x-4 sm:gap-x-6 md:gap-x-20 lg:gap-x-28 text-white text-xs sm:text-sm"
        variants={containerVariants}
      >
        {["HOME", "CONTACT", "PROJECTS", "ABOUT ME"].map((item) => (
          <motion.p 
            key={item}
            variants={itemVariants}
            className="cursor-pointer relative group whitespace-nowrap transition-opacity"
          >
            {item}
            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </motion.p>
        ))}
      </motion.div>
    </motion.nav>
  );
};
export default Navbar;
