import { useScroll, motion, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const About = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const [cursorVariant, setCursorVariant] = useState("default");
    const [isInsideContainer, setIsInsideContainer] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const mouseMove = (e) => {
            if (!isInsideContainer) return;
            
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseEnter = () => setIsInsideContainer(true);
        const handleMouseLeave = () => {
            setIsInsideContainer(false);
            setCursorVariant("default");
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("mouseenter", handleMouseEnter);
            container.addEventListener("mouseleave", handleMouseLeave);
        }
        window.addEventListener("mousemove", mouseMove);

        return () => {
            if (container) {
                container.removeEventListener("mouseenter", handleMouseEnter);
                container.removeEventListener("mouseleave", handleMouseLeave);
            }
            window.removeEventListener("mousemove", mouseMove);
        };
    }, [isInsideContainer]);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            opacity: isInsideContainer ? 1 : 0,
            transition: {
                type: "spring",
                mass: 0.1,
                damping: 10,
                stiffness: 100,
                restDelta: 0.001
            }
        },
        text: {
            height: 100,
            width: 100,
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
            backgroundColor: "green",
            mixBlendMode: "difference",
            transition: {
                type: "spring",
                mass: 0.2,
                damping: 10,
                stiffness: 100,
                restDelta: 0.001
            }
        }
    };

    const textEnter = () => isInsideContainer && setCursorVariant("text");
    const textLeave = () => isInsideContainer && setCursorVariant("default");

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

    const paragraphVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { staggerChildren: 0.1 }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const sentences = [
        "I am a Full Stack Developer with experience in Frontend, Backend, and Android development.",
        "I specialize in React.js for Frontend, Node.js & Express.js for Backend, and Firebase/MongoDB for Databases.",
        "I love solving complex problems and building efficient, user-friendly applications.",
        "Passionate about creating scalable web and mobile applications with a focus on performance and responsiveness.",
    ];

    return (
      <div 
          ref={containerRef}
          className="relative w-full overflow-x-hidden cursor-none"
      >
          <div className="About w-full min-h-[300vh] flex flex-col lg:flex-row justify-center lg:justify-between bg-black items-start px-4 sm:px-6 md:px-10">
              <div className="w-full lg:w-[60%] xl:w-[50%] sm:w-[50%] h-full flex flex-col">
                  {sentences.map((sentence, index) => (
                      <motion.div
                          key={index}
                          className="h-screen flex items-center justify-center px-2 sm:px-4"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ margin: "0px 0px -100px 0px", amount: 0.3 }}
                          variants={paragraphVariants}
                      >
                          <motion.p className="text-white font-brut text-xl sm:text-3xl md:text-4xl lg:text-[2.7rem] xl:text-5xl font-extrabold uppercase leading-tight md:leading-normal">
                              {sentence.split(" ").map((word, i) => (
                                  <motion.span 
                                      onMouseEnter={textEnter} 
                                      onMouseLeave={textLeave}
                                      key={i} 
                                      variants={wordVariants}
                                      transition={{ duration: 0.8 }}
                                      className="inline-block mr-1 sm:mr-2"
                                  >
                                      {word}
                                  </motion.span>
                              ))}
                          </motion.p>
                      </motion.div>
                  ))}
              </div>

              <motion.div
                  className="hidden md:block fixed top-[10%] right-4 lg:right-8 xl:right-10 z-0 -translate-y-1/2
                            w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[500px]
                            aspect-[5/6] rounded-lg shadow-md bg-white"
                  style={{
                      rotate,
                      transformOrigin: "center center"
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ margin: "0px 0px -100px 0px" }}
              />
          </div>
          <motion.div
              className='fixed -top-12 -left-12 bg-green-200 cursor w-8 h-8 rounded-full pointer-events-none z-50'
              variants={variants}
              animate={cursorVariant}
              transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                  mass: 0.5
              }}
          />
      </div>
  );
};

export default About;