import { useScroll, motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import { div } from "framer-motion/client";
import React, { forwardRef, useEffect, useRef, useState } from "react";

const About = forwardRef((props, ref) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const smoothX = useSpring(x, { stiffness: 100, damping: 20 });
    const smoothY = useSpring(y, { stiffness: 100, damping: 20 });
    const [cursorVariant, setCursorVariant] = useState("default");
    const containerRef = useRef(null);
    const cursorRef = useRef(null);
    const [isHoveringText, setIsHoveringText] = useState(false);
    const [isHoveringImage, setIsHoveringImage] = useState(false);
    const imgEnter = () => {
        setCursorVariant("image");
        setIsHoveringImage(true);
    };

    const imgLeave = () => {
        setCursorVariant("default");
        setIsHoveringImage(false);
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e) => {
            x.set(e.clientX - 16);
            y.set(e.clientY - 16);

            const rect = container.getBoundingClientRect();
            const isInside = 
                e.clientX >= rect.left && 
                e.clientX <= rect.right && 
                e.clientY >= rect.top && 
                e.clientY <= rect.bottom;

            if (cursorRef.current) {
                cursorRef.current.style.opacity = isInside ? 1 : 0;
            }
        };

        const handleMouseEnter = () => {
            window.addEventListener("mousemove", handleMouseMove);
        };

        const handleMouseLeave = () => {
            setCursorVariant("default");
            if (cursorRef.current) {
                cursorRef.current.style.opacity = 0;
            }
            window.removeEventListener("mousemove", handleMouseMove);
        };

        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const variants = {
        default: {
            height: 40,
            width: 40,
            backgroundColor: "#E8FD9F",
            mixBlendMode: "normal",
        },
        text: {
            height: 80,
            width: 80,
            backgroundColor: "#E8FD9F",
            mixBlendMode: "difference",
             borderRadius:0,
        },
        image: {
            height: 100,
            width: 100,
            borderRadius:0,
            backgroundColor: "black",
             rotate:45,
        }
    };

    const textEnter = () => {
        setCursorVariant("text");
        setIsHoveringText(true);
    };

    const textLeave = () => {
        setCursorVariant("default");
        setIsHoveringText(false);
    };

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
            className="relative w-full overflow-x-hidden"
            style={{ cursor: 'none' }}
        >
            <div className="About w-full min-h-[300vh] flex flex-col lg:flex-row justify-center lg:justify-between bg-black items-start px-4 sm:px-6 md:px-10" ref={ref}>
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
                    onMouseEnter={imgEnter}
                    onMouseLeave={imgLeave}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ margin: "0px 0px -100px 0px" }}
                />
            </div>
            <motion.div
                ref={cursorRef}
                className='fixed -top-12 -left-12 rounded-full pointer-events-none z-50'
                style={{ 
                    x: smoothX, 
                    y: smoothY,
                    opacity: 0 
                }}
                variants={variants}
                animate={cursorVariant}
            />
        </div>
    );
});

export default About;