import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { ArrowUpRight } from "lucide-react";

const textVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    filter: 'blur(4px)'
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const arrowVariants = {
  hidden: {
    opacity: 0,
    x: -10
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const Contact = () => {
    const head = ["together we can", "make something", "extraordinary", "anshumishraocog@gmail.com"];
    const [forms, setForms] = useState({ name: '', email: '', message: '' });
    const [isHovered, setIsHovered] = useState(false);

    function submitted(event) {
        event.preventDefault();
        console.log(forms);
        setForms({ name: '', email: '', message: '' });
    }

    function changeHandler(event) {
        setForms(prevForms => ({
            ...prevForms,
            [event.target.name]: event.target.value
        }));
    }

    const hoverEffects = {
      0: { color: '#CDEA68', transition: { duration: 0.2 } },
      2: { color: 'gray', transition: { duration: 0.2 } },
      3: { scale: 1.05, transition: { duration: 0.2 } }
    };

    return (
        <div className="bg-zinc-900 data-scroll data-scroll-speed='-0.3' data-scroll-section w-full min-h-screen flex flex-col md:flex-row relative z-40 overflow-hidden py-8 md:py-0 rounded-t-3xl">
            
            <div className="flex flex-col ml-4 justify-start items-start z-20 mt-8 px-4 md:px-0">
                {head.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`head font-bold uppercase relative cursor-default
                            ${index === 3 ? 'text-white underline underline-offset-2 text-lg font-brut lowercase mt-[30%] flex items-center gap-2' : 'text-3xl sm:text-4xl md:text-5xl'} 
                            ${index === 1 ? 'text-stroke text-transparent' : ''} 
                            ${index === 2 ? 'font-barcode' : 'font-brut'} 
                            ${index !== 3 ? 'text-white' : ''}`}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={textVariants}
                        onHoverStart={() => index === 3 && setIsHovered(true)}
                        onHoverEnd={() => index === 3 && setIsHovered(false)}
                        whileHover={hoverEffects[index]}
                    >
                        {index === 3 ? (
                          <a href="mailto:anshumishraocog@gmail.com" className="flex items-center gap-2">
                            {item}
                            <motion.span
                                className="bg-[#CDEA68] rounded-full p-1"
                                initial="hidden"
                                animate={isHovered ? "visible" : "hidden"}
                                variants={arrowVariants}
                            >
                               <ArrowUpRight size={16} className='text-black' />
                            </motion.span>
                          </a>
                        ) : item}
                    </motion.div>
                ))}
            </div>

            <ContactForm 
                forms={forms} 
                changeHandler={changeHandler} 
                submitted={submitted} 
            />
        </div>
    );
};

export default Contact;
