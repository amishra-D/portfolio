import React from 'react';
import { GrReactjs } from "react-icons/gr";
import { DiNodejs } from "react-icons/di";
import { SiExpress, SiMongodb, SiKotlin, SiGreensock } from "react-icons/si";
import { FaFigma, FaCss3, FaHtml5 } from "react-icons/fa";
import { animate, motion } from 'framer-motion';

const icons = [
  <GrReactjs key="react" className='text-6xl max-xs:4xl  md:text-9xl' aria-hidden="true" />,
  <DiNodejs key="node" className='text-6xl max-xs:4xl  md:text-9xl' aria-hidden="true" />,
  <SiExpress key="express" className='text-6xl max-xs:4xl  md:text-9xl' aria-hidden="true" />,
  <SiMongodb key="mongodb" className='text-6xl max-xs:4xl  md:text-9xl' aria-hidden="true" />,
  <SiKotlin key="kotlin" className='text-6xl max-xs:4xl  md:text-9xl' aria-hidden="true" />,
  <FaFigma key="figma" className='text-6xl max-xs:4xl md:text-9xl' aria-hidden="true" />,
  <FaCss3 key="css" className='text-6xl max-xs:4xl md:text-9xl' aria-hidden="true" />,
  <FaHtml5 key="html" className='text-6xl max-xs:4xl md:text-9xl' aria-hidden="true" />,
  <SiGreensock key="gsap" className='text-6xl max-xs:4xl md:text-9xl' aria-hidden="true" />,
];

const Marquee = () => {

  return (
    <div className="w-[105%] overflow-hidden rotate-[2deg] -top-11 absolute bg-gradient-to-r from-[#EBFFA4] to-[#8D9962] py-8 max-xs:py-4 z-80">
      <motion.div
        className="flex gap-20 md:gap-24 w-max flex-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          repeatType: "loop",
          duration: 60,
          repeat: Infinity,
        }}
      >
        {icons} 
        {icons}
        {icons}
      </motion.div>
    </div>
  );
};

export default Marquee;