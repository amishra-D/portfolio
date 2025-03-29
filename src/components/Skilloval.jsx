import React from 'react';

const Skilloval = ({ index, header, desc, position }) => {
  return (
    <div className={`relative w-full flex ${position === 'left' ? 'justify-start' : 'justify-end'}`}>
      <div className={`relative w-full max-w-2xl ${position === 'left' ? 'md:ml-8' : 'md:mr-8'}`}>
        <svg width="600" height="500" viewBox="0 0 835 736" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M835 299.053C726.512 614.626 285.529 736 122.443 736C-40.6431 736 6.25148 332.887 6.25148 151.323C6.25148 -30.2408 267.104 -9.55398 442.131 18.1584C624.164 46.9802 835 117.489 835 299.053Z" fill="black"/>
</svg>

                <div className={`absolute inset-0 flex ${position === 'left' ? 'flex-col items-start pl-8 md:pl-12' : 'flex-col items-end pr-8 md:pr-48'} justify-center text-white`}>
          <div className="text-4xl md:text-6xl font-bold opacity-40 mb-1 md:mb-2">{String(index).padStart(2, '0')}</div>
          <div className="text-xl md:text-4xl font-bold mb-1 md:mb-2">{header}</div>
          <div className="text-xs md:text-sm font-medium max-w-[240px] md:max-w-xs">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Skilloval;