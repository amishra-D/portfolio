import React, { forwardRef } from 'react';
import Skills from './Skills.jsx';
import Skilloval from './Skilloval.jsx';

const Skillscont = forwardRef((props,ref) => {
  const skills = [
    { header: 'Frontend', desc: 'Building Interactive And Responsive UI' },
    { header: 'Backend', desc: 'Building Fast And Scalable APIs' },
    { header: 'Database Management', desc: 'Storing And Retrieving Data Efficiently' },
    { header: 'Mobile Development', desc: 'Creating Android Apps With Seamless Integration' },
  ];

  return (
    <div className="bg-[#CDEA68] w-full min-h-screen z-40 flex flex-col relative pt-20 pb-32"
    ref={ref}>
      <Skills />
      <div className="w-full flex flex-col gap-12 md:gap-16 px-4 md:px-8 mt-12 md:mt-20">
        {skills.map((item, index) => (
          <Skilloval 
            key={index}
            position={index % 2 === 0 ? 'left' : 'right'}
            header={item.header} 
            desc={item.desc} 
            index={index + 1}
          />
        ))}
      </div>
    </div>
  );
});

export default Skillscont;