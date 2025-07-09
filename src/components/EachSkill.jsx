import React from 'react';
import {
  ShieldCheck, Database, ServerCog, Video,
  Smartphone, Bot, AppWindow, Network,
  Palette, Brush, Component, MoveRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const skillData = {
  'Full Stack Development': [
    { icon: ShieldCheck, text: 'Implement secure websites using JWT and Argon2/bcrypt hashing.' },
    { icon: Database, text: 'Proficient in both SQL (MySQL) and NoSQL (MongoDB) database systems.' },
    { icon: ServerCog, text: 'Design and develop RESTful APIs using Express.js with robust routing and middleware.' },
    { icon: Video, text: 'Build real-time communication systems using WebRTC and Socket.IO.' },
  ],
  'React Native App Development': [
    { icon: Smartphone, text: 'Developed scalable and responsive Android apps using React Native.' },
    { icon: Bot, text: 'Integrated AI/LLM APIs like Gemini & OpenRouter for chatbot and quote generator features.' },
    { icon: AppWindow, text: 'Handled secure auth and state management with Redux Toolkit.' },
    { icon: Network, text: 'Built REST API bridges between frontend and Node.js/MongoDB backend.' },
  ],
  'UI/UX Design & Animation': [
    { icon: Palette, text: 'Crafted clean, modern UIs using TailwindCSS and Figma wireframes.' },
    { icon: Brush, text: 'Built consistent design systems using ShadCN UI and component libraries.' },
    { icon: Component, text: 'Created microinteractions with Framer Motion and GSAP.' },
    { icon: MoveRight, text: 'Implemented responsive, animated landing pages and user flows.' },
  ],
};

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const EachSkill = () => {
  const skillKeys = Object.keys(skillData);

  return (
    <div className="w-full bg-neutral-950 text-white py-20 px-4 sm:px-8 md:px-12 lg:px-24 z-40">
      {skillKeys.map((skill, skillIndex) => (
        <motion.div
          key={skill}
          className="mb-20 flex flex-col justify-center items-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={skillIndex}
        >
          <div className="mb-10 text-center">
            <span className="inline-block bg-[#ddff00]/10 text-[#ddff00] text-xl sm:text-2xl font-mono px-4 py-2 rounded-full mb-4">
              #{skillIndex + 1}
            </span>
            <h3 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-[#ddff00] to-[#a2c000] bg-clip-text text-transparent">
              {skill}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl px-2 sm:px-4">
            {skillData[skill].map(({ icon: Icon, text }, idx) => (
              <motion.div
                key={idx}
                className="group bg-neutral-900/50 hover:bg-neutral-900/70 border border-neutral-800 hover:border-[#ddff00]/30 rounded-xl p-4 sm:p-6 transition-all duration-300"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EachSkill;
