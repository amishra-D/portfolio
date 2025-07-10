import { animate, motion } from 'framer-motion';
import React from 'react';

const servicesOffered = [
  {
    title: "Full-Stack Web Development",
    description: "Crafting responsive, performant, and scalable websites using the MERN stack, with clean code and intuitive UX.",
    icon: "code"
  },
  {
    title: "React Native App Development",
    description: "Building cross-platform mobile apps with beautiful interfaces, API integrations, and native performance using React Native.",
    icon: "smartphone"
  },
  {
    title: "UI/UX Design & Animation",
    description: "Designing visually appealing interfaces and smooth user experiences with Tailwind CSS, GSAP, and Framer Motion.",
    icon: "paintbrush"
  }
];

const Moreabout = () => {
  const variants={
    hidden:{opacity:0,y:"40%",scale:0.8},
    visible:{opacity:1,y:0,scale:1},
transition : {
  duration: 0.8,
  delay: 0.1,
  ease: [0, 0.71, 0.2, 1.01],
}  }
  return (
    <div className='min-h-screen w-full bg-neutral-950 z-40 rounded-b-3xl flex justify-center items-center px-4 py-10'>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesOffered.map((service, idx) => (
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            key={idx}
            className="bg-black border rounded-2xl border-[#CDEA68] flex flex-col gap-4 p-6 shadow-md hover:scale-[1.02] transition-transform"
          >
            <span className="text-[#CDEA68] text-3xl self-start font-bold">#{idx + 1}</span>
            <div className="flex flex-col items-center justify-center gap-3 text-white text-4xl font-bold">
              <h1>{service.title}</h1>
              <p className='text-sm text-gray-300 leading-relaxed'>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Moreabout;
