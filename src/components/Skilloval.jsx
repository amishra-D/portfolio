import React from 'react';

const Skilloval = ({ index, header, desc, position }) => {
  return (
    <div className={`relative w-full flex ${position === 'left' ? 'justify-start' : 'justify-end'}`}>
      <div className={`relative w-full max-w-2xl ${position === 'left' ? 'md:ml-8' : 'md:mr-8'}`}>
        {/* Smaller Oval SVG Background */}
        <svg
          className="w-full h-auto"
          viewBox="0 0 588 469"  // Reduced viewBox by half
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path 
            d="M538 246C373 468.5 397.237 473.75 286.237 467.5C175.237 461.25 214.737 467.5 51.2365 233.75C-112.264 0 156.45 0 286.237 0C416.024 0 703 23.5 538 246Z" 
            fill="black"
          />
        </svg>
        
        {/* Content */}
        <div className={`absolute inset-0 flex ${position === 'left' ? 'flex-col items-start pl-8 md:pl-12' : 'flex-col items-end pr-8 md:pr-12'} justify-center text-white`}>
          <div className="text-4xl md:text-5xl font-bold opacity-40 mb-1 md:mb-2">{String(index).padStart(2, '0')}</div>
          <div className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{header}</div>
          <div className="text-xs md:text-sm font-medium max-w-[240px] md:max-w-xs">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Skilloval;