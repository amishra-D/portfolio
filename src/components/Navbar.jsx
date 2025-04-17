import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
  
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
      duration: 1
    }
  }
};

const Navbar = ({ scrollToSection, homeRef, projectsRef, aboutRef, skillsRef, contactsRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { scrollYProgress } = useScroll();

  const navItems = [
    { name: "Home", ref: homeRef },
    { name: "About", ref: aboutRef },
    { name: "Skills", ref: skillsRef },
    { name: "Projects", ref: projectsRef },
    { name: "Contact", ref: contactsRef }
  ];

  return (
    <motion.nav 
      className="fixed w-full top-0 z-50 bg-white/5 backdrop-blur-lg border-b border-white/10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          style={{ 
            opacity: scrollYProgress          }} 
          className="text-white font-bold text-lg font-brut"
        >
Anshu Mishra        </motion.div>

        <motion.div 
          className="hidden md:flex space-x-8"
          variants={containerVariants}
        >
          {navItems.map((item) => (
            <motion.button
              variants={itemVariants}
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.ref)}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors relative group font-brut"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </motion.button>
          ))}
        </motion.div>

        <button 
          onClick={toggleMenu}
          className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="flex flex-col py-4 px-6 space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    variants={itemVariants}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      scrollToSection(item.ref);
                      setIsOpen(false);
                    }}
                    className="text-black text-left py-3 px-4 rounded-md hover:bg-white/10 transition-colors text-lg font-brut"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;