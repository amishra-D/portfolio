import React, { forwardRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Download, Github, Linkedin, Mail, ExternalLink, Code2, Smartphone, Globe } from "lucide-react";

const handleDownload = async () => {
  try {
    const response = await fetch('/Resume.pdf', { method: 'HEAD' });
    
    if (!response.ok) {
      throw new Error(`File not found: ${response.status}`);
    }
    
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Anshu-CV.pdf';
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Download started successfully');
  } catch (error) {
    console.error('Download failed:', error);
    
    try {
      const link = document.createElement('a');
      link.href = '/Resume.pdf';
      link.download = 'Anshu-CV.pdf';
      link.target = '_blank';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (fallbackError) {
      console.error('Fallback download failed:', fallbackError);
      window.open('/Resume.pdf', '_blank');
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.8
    }
  }
};

const gradientVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 0.9,
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
};

const skillsData = [
  { icon: Code2, label: "Frontend", color: "bg-[#ddff00]" },
  { icon: Globe, label: "Backend", color: "bg-[#ddff00]" },
  { icon: Smartphone, label: "Mobile", color: "bg-[#ddff00]" }
];

const socialLinks = [
  { icon: Github, href: "https://github.com/amishra-D", label: "GitHub" },
  { icon: Linkedin, href: "www.linkedin.com/in/anshu-mishra-a5b645291", label: "LinkedIn" },
  { icon: Mail, href: "mailto:anshumishraocog@gmail.com", label: "Email" }
];

const AnimatedButton = ({ onClick, children, variant = "primary", className = "" }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative group px-8 py-4 rounded-full font-semibold text-lg
        transition-all duration-300 ease-out overflow-hidden z-40
        ${variant === "primary" 
          ? "bg-[#ddff00] text-black shadow-lg shadow-[#ddff00]/40 hover:shadow-[#ddff00]/60" 
          : "bg-black text-[#ddff00] border border-[#ddff00]/40 hover:bg-[#ddff00]/10"
        }
        ${className}
      `}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      variants={itemVariants}
    >
      <div className="relative z-40 flex items-center gap-2">
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
};

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;
  
  return (
    <motion.div
      className="group relative z-40"
      variants={itemVariants}
      whileHover={{ y: -10, scale: 1.05 }}
      custom={index}
    >
      <div className="relative bg-black rounded-2xl p-6 border border-[#ddff00]/40 hover:border-[#ddff00]/60 transition-all duration-300 z-40">
        <div className={`inline-flex p-3 rounded-xl bg-[#ddff00] mb-4 z-40`}>
          <Icon className="w-6 h-6 text-black z-40" />
        </div>
        <h3 className="text-[#ddff00] font-semibold text-lg z-40">{skill.label}</h3>
        <div className="absolute inset-0 bg-gradient-to-r from-[#ddff00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-40" />
      </div>
    </motion.div>
  );
};

const SocialLink = ({ social, index }) => {
  const Icon = social.icon;
  
  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-4 bg-black rounded-full border border-[#ddff00]/40 hover:border-[#ddff00]/60 transition-all duration-300 z-40"
      variants={itemVariants}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      custom={index}
    >
      <Icon className="w-6 h-6 text-[#ddff00] group-hover:text-[#ddff00] transition-colors duration-300 z-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#ddff00]/20 to-[#ddff00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full z-40" />
    </motion.a>
  );
};

const Home = forwardRef((props, ref) => {
  const [isMoved, setIsMoved] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="home relative min-h-screen bg-black overflow-hidden"
      ref={ref}
      style={{ zIndex: 30 }}
    >
      <div className="absolute inset-0 overflow-hidden z-30">
        <motion.div 
          className="absolute w-[40%] h-[40%] rounded-full blur-[100px] z-30"
          style={{
            background: '#ddff00',
            left: `${mousePosition.x * 0.02}%`,
            top: `${mousePosition.y * 0.02}%`,
            opacity: 0.15
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute w-[30%] h-[30%] rounded-full blur-[80px] z-30"
          style={{
            background: '#ddff00',
            right: `${mousePosition.x * 0.03}%`,
            bottom: `${mousePosition.y * 0.03}%`,
            opacity: 0.1
          }}
          animate={{
            x: [0, -80, 120, 0],
            y: [0, 120, -80, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#ddff00] rounded-full z-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="relative z-40 container mx-auto px-4 sm:px-8 lg:px-16 py-12">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center min-h-screen z-40"
          variants={containerVariants}
        >
          <div className="space-y-8 z-40">
            <motion.div variants={itemVariants} className="z-40">
              <motion.span 
                className="inline-block px-4 py-2 bg-[#ddff00]/20 text-[#ddff00] rounded-full text-sm font-medium mb-4 z-40"
                whileHover={{ scale: 1.05 }}
              >
                👋 Hello, I'm
              </motion.span>
            </motion.div>

            <motion.div variants={itemVariants} className="z-40">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight z-40">
                <span className="text-[#ddff00] z-40">Anshu</span>
                <br />
                <span className="text-white z-40">Mishra</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="z-40">
              <p className="text-xl sm:text-2xl text-gray-300 font-medium z-40">
                Full Stack Developer & 
                <span className="text-[#ddff00] z-40"> Creative Problem Solver</span>
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="z-40">
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl z-40">
                I craft digital experiences that blend beautiful design with powerful functionality. 
                Passionate about building scalable web applications that make a difference.
              </p>
            </motion.div>
            <motion.div 
              className="flex flex-wrap gap-4 z-40"
              variants={itemVariants}
            >
              <AnimatedButton onClick={handleDownload}>
                <Download className="w-5 h-5 z-40" />
                Download CV
              </AnimatedButton>
              
              <AnimatedButton variant="secondary">
                <ExternalLink className="w-5 h-5 z-40" />
                View Portfolio
              </AnimatedButton>
            </motion.div>
            <motion.div 
              className="flex gap-4 z-40"
              variants={containerVariants}
            >
              {socialLinks.map((social, index) => (
                <SocialLink key={social.label} social={social} index={index} />
              ))}
            </motion.div>
          </div>
          <div className="space-y-8 z-40">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6 z-40"
              variants={containerVariants}
            >
              {skillsData.map((skill, index) => (
                <SkillCard key={skill.label} skill={skill} index={index} />
              ))}
            </motion.div>
            <motion.div 
              className="grid grid-cols-3 gap-6 z-40"
              variants={containerVariants}
            >
              {[
                { number: "10+", label: "Projects" },
                { number: "2+", label: "Years Exp." },
                { number: "100%", label: "Passion" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-black rounded-xl border border-[#ddff00]/40 z-40"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-[#ddff00] z-40">{stat.number}</div>
                  <div className="text-sm text-gray-400 z-40">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="relative p-8 bg-black rounded-2xl border border-[#ddff00]/40 z-40"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 z-40">
                <motion.div
                  className="w-12 h-12 bg-[#ddff00] rounded-full flex items-center justify-center cursor-pointer z-40"
                  onClick={() => setIsMoved(!isMoved)}
                  animate={{
                    rotate: isMoved ? 360 : 0,
                    scale: isMoved ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Code2 className="w-6 h-6 text-black z-40" />
                </motion.div>
                <div className="z-40">
                  <h3 className="text-[#ddff00] font-semibold z-40">Ready to collaborate?</h3>
                  <p className="text-gray-400 text-sm z-40">Let's build something amazing together</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40"
        variants={itemVariants}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#ddff00]/30 rounded-full flex justify-center z-40">
          <div className="w-1 h-3 bg-[#ddff00]/50 rounded-full mt-2 z-40"></div>
        </div>
      </motion.div>
    </motion.div>
  );
});

Home.displayName = 'Home';

export default Home;