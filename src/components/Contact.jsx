import React, { forwardRef, useState } from 'react';
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

const Contact = forwardRef((props,ref) => {
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
        <div className="bg-zinc-900  w-full min-h-screen flex flex-col md:flex-row relative z-40 overflow-hidden py-8 md:py-0 rounded-t-3xl"ref={ref} data-scroll data-scroll-speed='-0.2' data-scroll-section>
          <motion.svg className='absolute top-12 left-20 rotate-[30deg]' width="714" height="741" viewBox="0 0 714 741" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path d="M489.151 140.971C467.651 278.972 554.162 413.603 534.151 530.971C514.291 647.455 364.373 668.44 260.142 702.483C155.91 736.527 77.2881 756.165 10.9695 722.818C-55.3491 689.471 198.151 762.972 260.142 635.472C322.133 507.972 161.388 385.343 208.651 290.472C255.914 195.6 560.656 -111.983 683.369 42.8188C703.852 68.6581 703.635 71.0931 713.262 101.345C622.151 3.09552 510.651 2.97113 489.151 140.971Z" fill="url(#paint0_linear_150_16)" initial={{ opacity: 0 }}
        whileInView={{ opacity:0.2}}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true, margin: "-100px" }}
/>
<defs>
<linearGradient id="paint0_linear_150_16" x1="-104.114" y1="657.077" x2="-104.114" y2="-108.877" gradientUnits="userSpaceOnUse">
<stop stopColor="#E7FF93"/>
<stop offset="1" stopOpacity="0.4"/>
</linearGradient>
</defs>
</motion.svg>

            
            <div className="flex flex-col ml-4 justify-start items-start z-20 mt-8 px-4 md:px-0">
                {head.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`head font-bold uppercase relative cursor-default font-brut
                                                      ${index === 2 ? ' font-barcode' : 'font-sans'} 

                            ${index === 3 ? 'text-white underline underline-offset-2 text-lg lowercase mt-[30%] flex items-center gap-2' : 'text-3xl sm:text-4xl md:text-5xl'} 
                            ${index === 1 ? 'text-stroke text-transparent' : 'text-white'} 
                          `}
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
});

export default Contact;
