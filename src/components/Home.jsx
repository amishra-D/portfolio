import React, { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

const resume='http://localhost:3000/Resume(3).pdf'
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

const gradientVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.9,
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};



const Home = forwardRef((props, ref) => {
  const downloadpdf = () => {
    try {
      // Use relative path from public folder
      const pdfUrl = '/Resume.pdf';
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Anshu_Mishra_Resume.pdf'; // Better filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      // Optional: Add user feedback here
    }
  };
  const [isMoved, setIsMoved] = useState(false);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="home flex flex-col h-screen bg-black overflow-hidden z-20"
      ref={ref}
    >
      <div className="relative w-full h-full flex flex-col items-start justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 overflow-hidden">
        
        <motion.div 
          className="absolute inset-0 w-full h-full flex justify-between items-start z-10 overflow-hidden"
          variants={containerVariants}
        >
          <motion.div
            className="w-[50%] xs:w-[45%] sm:w-[40%] h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] bg-gradient-to-br from-[#DFFFB0] to-[#E9FEC9] rounded-full blur-[80px] sm:blur-[100px] mix-blend-normal self-end"
            variants={gradientVariants}
            initial={{ x: "-10%", y: "0%" }}
            animate={{
              x: ["-30%", "-40%", "-30%"],
              y: ["0%", "-10%", "0%"],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="w-[60%] xs:w-[55%] sm:w-[50%] h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] bg-gradient-to-tl from-[#A2FFD0] to-teal-500 rounded-full blur-[80px] sm:blur-[100px] mix-blend-normal"
            variants={gradientVariants}
            initial={{ x: "20%", y: "-90%" }}
            animate={{
              x: ["20%", "30%", "20%"],
              y: ["-10%", "-30%", "-10%"],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </motion.div>

        <motion.div 
          className="z-30 text-left w-full"
          variants={containerVariants}
        >
          <motion.div 
            className="font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight"
            variants={itemVariants}
          >
            Hi, I'm
            <motion.span
              className="bg-[#FCFCDC] rounded-3xl inline-flex items-center justify-between px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 mx-1 sm:mx-2 h-6 sm:h-8 md:h-10 w-[60px] sm:w-[80px] md:w-[100px] relative cursor-pointer overflow-hidden"
              onClick={() => setIsMoved(!isMoved)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="flex items-center w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                animate={{
                  x: isMoved ? [0, 25] : 0,
                  rotate: isMoved ? 360 : 0,
                  scale: isMoved ? [1, 1.1] : 1,
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M107.143 0H92.8571V63.2531L69.1621 4.60582L55.9166 9.95735L80.2255 70.1239L34.3401 24.2385L24.2386 34.3401L68.2177 78.3191L11.2241 53.4181L5.50459 66.5089L65.8105 92.8571H0V107.143H65.8104L5.50461 133.491L11.2241 146.582L68.2176 121.681L24.2386 165.66L34.3401 175.761L80.2255 129.876L55.9166 190.043L69.1621 195.394L92.8571 136.747V200H107.143V136.747L130.838 195.394L144.083 190.043L119.775 129.876L165.66 175.761L175.761 165.66L131.782 121.681L188.776 146.582L194.495 133.491L134.19 107.143H200V92.8571H134.189L194.495 66.5089L188.776 53.4181L131.782 78.3191L175.761 34.34L165.66 24.2385L119.775 70.1238L144.083 9.95735L130.838 4.60582L107.143 63.2531V0Z"
                    fill="black"
                  />
                </svg>
              </motion.div>
            </motion.span>
            <motion.span 
              className="text-black text-stroke"
              variants={itemVariants}
            >
              Anshu Mishra
            </motion.span>
          </motion.div>

          <motion.div 
            className="mt-2 sm:mt-3 md:mt-4"
            variants={containerVariants}
          >
            {[
              "Full Stack Developer passionate about building scalable",
              "web & mobile applications."
            ].map((text, index) => (
              <motion.p 
                key={index}
                variants={itemVariants}
                className="text-base sm:text-xl md:text-3xl lg:text-3xl xl:text-5xl text-white font-bold leading-snug lg:md:whitespace-nowrap xl:md:whitespace-nowrap md:whitespace-nowrap"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
        <AnimatedButton downloadpdf={downloadpdf} resume={resume} text="DOWNLOAD CV" 
        variants={itemVariants}/> 
      </div>

    </motion.div>
  );
});

export default Home;