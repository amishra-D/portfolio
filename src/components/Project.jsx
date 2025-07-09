import React, { forwardRef, useEffect, useRef, useState } from "react";
import ProjectCard from './ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const projects = [
  {
    image: "https://res.cloudinary.com/dgvmc3ezr/image/upload/v1752079135/Screenshot_2025-06-27_211010_n78lhv.png",
    title: "Threadly",
    tags: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'Redux Toolkit', 'JWT', 'ShadCN', 'Tailwind CSS', 'Cloudinary'],
    description: "An anonymous social media platform where users can post images, videos, or text without revealing their identity. Includes real-time interactions, likes/dislikes, comments, and content filtering.",
    url: "https://threadly-3859.vercel.app/"
  },
  {
    image: "https://res.cloudinary.com/dgvmc3ezr/image/upload/v1752079249/Screenshot_2025-07-07_014249_x3hp2s.png",
    title: "Zynk",
    tags: ['WebRTC', 'React.js', 'Tailwind CSS', 'Socket.IO', 'Peer-to-Peer', 'JWT', 'MongoDB'],
    description: "A one-on-one encrypted communication platform focused on privacy and seamless peer-to-peer connection using WebRTC.",
    url: "https://zynk-fvm9.vercel.app/"
  },
  {
    image: "https://res.cloudinary.com/dgvmc3ezr/image/upload/v1752079445/Screenshot_2025-04-23_223308_ar7emz.png",
    title: "DailyDrift",
    tags: ['React.js', 'Firebase', 'Recharts', 'Tailwind CSS', 'Progressive Web App'],
    description: "A habit tracker web app with daily tracking, data visualization, and smart reminders to build consistency and routines.",
    url: "https://amishra-d.github.io/DailyDrift/"
  },
  {
    image: "https://res.cloudinary.com/dgvmc3ezr/image/upload/v1752079307/Screenshot_2025-03-28_021747_odkcng.png",
    title: "NotesCalc",
    tags: ['HTML', 'CSS', 'JavaScript', 'Canva'],
    description: "A lightweight web app combining smart note-taking with inline arithmetic calculations for productivity and ease.",
    url: "https://amishra-d.github.io/practice/"
  },
  {
    image: "https://res.cloudinary.com/dgvmc3ezr/image/upload/v1752079389/Screenshot_2025-03-28_021206_vshzm4.png",
    title: "Read Rush",
    tags: ['HTML', 'GSAP', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
    description: "A clean and responsive online bookstore interface for discovering and exploring books by genre and author.",
    url: "https://amishra-d.github.io/ReadRush/"
  },
  {
    image: "https://res.cloudinary.com/dgvmc3ezr/image/upload/v1752079352/Screenshot_2025-03-28_021014_thuswo.png",
    title: "Road Rating",
    tags: ['Leaflet.js', 'React.js', 'Firebase', 'GeoLocation API'],
    description: "An interactive map-based web app where users can rate roads, share feedback, and explore commute experiences in real time.",
    url: "https://amishra-d.github.io/road-rating-app/"
  }
];

const Project = forwardRef((props, ref) => {
  const scrollRef = useRef(null);
  const [showArrows, setShowArrows] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 768;
      setIsMobile(isSmall);
      setShowArrows(!isSmall);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="w-full min-h-screen bg-neutral-900 flex flex-col justify-center items-center py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 z-40"
    >
      <div className="relative w-full max-w-[1800px]">
        {showArrows && (
          <>
            <button
              onClick={scrollLeft}
              className="md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 bg-[#ddff00] text-black rounded-full flex items-center justify-center hover:bg-[#ddff00]/90 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollRight}
              className="md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 bg-[#ddff00] text-black rounded-full flex items-center justify-center hover:bg-[#ddff00]/90 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <motion.div
          ref={scrollRef}
          className="scroller flex items-start gap-4 sm:gap-6 overflow-x-auto pb-8 pt-2 px-2 sm:px-4 snap-x snap-mandatory scrollbar-hide w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] snap-start flex-shrink-0 px-2"
              variants={itemVariants}
            >
              <ProjectCard Project={project} idx={index} />
            </motion.div>
          ))}
        </motion.div>

        {isMobile && (
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 bg-[#ddff00] text-black rounded-full flex items-center justify-center hover:bg-[#ddff00]/90 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 bg-[#ddff00] text-black rounded-full flex items-center justify-center hover:bg-[#ddff00]/90 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
});

export default Project;
