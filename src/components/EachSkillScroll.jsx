import React from 'react';

const EachSkillScroll = ({ skill = '', skillData = {}, index = 0 }) => {
  const points = skillData[skill] || [];

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 py-8 sm:py-12">
      <div className="mb-8 text-center">
        <span className="inline-block bg-[#ddff00]/10 text-[#ddff00] text-xl sm:text-2xl font-mono px-4 py-2 rounded-full mb-4">
          #{index + 1}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-[#ddff00] to-[#a2c000] bg-clip-text text-transparent">
          {skill}
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl px-2 sm:px-4">
        {Array.isArray(points) &&
          points.map(({ icon: Icon, text }, idx) => (
            <div
              key={idx}
              className="group bg-neutral-900/50 hover:bg-neutral-900/70 border border-neutral-800 hover:border-[#ddff00]/30 rounded-xl p-4 sm:p-6 transition-all duration-300"
            >
              <div className="flex gap-4 sm:gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="p-2 sm:p-3 rounded-lg bg-[#ddff00]/10 group-hover:bg-[#ddff00]/20 transition-colors">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#ddff00]" />
                  </div>
                </div>
                <p className="text-base sm:text-lg text-neutral-300 group-hover:text-white transition-colors">
                  {text}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EachSkillScroll;
