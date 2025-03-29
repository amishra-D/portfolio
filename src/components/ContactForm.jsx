import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import { Github, Linkedin, Instagram } from 'lucide-react';

const ContactForm = ({ forms, changeHandler, submitted }) => {
    const containerVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300, 
                damping: 10,
                staggerChildren: 0.05,
                when: "beforeChildren"
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 250,
                damping: 8
            }
        }
    };
    

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="bg-[#1A1A1A] w-[90%] md:w-[40%] h-auto p-8 mx-auto md:absolute md:top-10 md:right-28 z-30 flex flex-col gap-6 rounded-xl shadow-2xl opacity-80 mt-8 md:mt-16 mb-8 md:mb-0 backdrop-blur-sm "
        >
            <motion.form 
                onSubmit={submitted} 
                className="w-full flex flex-col gap-16 font-brut placeholder-[#988F8F]"
                variants={containerVariants}
            >
                <motion.div variants={itemVariants}
                            viewport={{ once: true, margin: "-50px" }}
>
                    <input 
                        onChange={changeHandler} 
                        type="text" 
                        name="name" 
                        value={forms.name} 
                        placeholder="Your Name" 
                        className="text-xl md:text-2xl bg-transparent w-full px-3 border-b-2 border-[#E7FF93] focus:border-[#E7FF93]/80 rounded-none outline-none text-white py-3 transition-all duration-300 focus:scale-[1.02]" 
                        required
                    />
                </motion.div>

                <motion.div variants={itemVariants}>
                    
                    <input 
                        onChange={changeHandler} 
                        type="email" 
                        name="email" 
                        value={forms.email} 
                        placeholder="Your @Email" 
                        className="text-xl md:text-2xl bg-transparent w-full px-3 border-b-2 border-[#E7FF93] focus:border-[#E7FF93]/80 rounded-none outline-none text-white py-3 transition-all duration-300 focus:scale-[1.02]" 
                        required
                    />
                </motion.div>

                <motion.div variants={itemVariants}viewport={{ margin: "-30% 0px -30% 0px" }}
                >
                    <textarea 
                        onChange={changeHandler} 
                        name="message" 
                        value={forms.message} 
                        placeholder="Write a Message" 
                        className="text-xl md:text-2xl bg-transparent w-full px-3 border-b-2 border-[#E7FF93] focus:border-[#E7FF93]/80 rounded-none outline-none text-white resize-none transition-all duration-300 focus:scale-[1.02]"
                        required
                    />
                </motion.div>
                
                <motion.div 
                    className="w-full mt-2"
                    variants={itemVariants}
                >
                    <AnimatedButton type="submit" text="SUBMIT FORM" />
                </motion.div>
            </motion.form>

            <motion.div 
                className='flex md:gap-6 gap-4 mt-3 self-end mb-8'
                variants={itemVariants}
            >
                <a href="https://github.com" aria-label="GitHub">
                    <Github className="w-6 h-6 text-white hover:text-[#E7FF93] transition-colors duration-300" />
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                    <Linkedin className="w-6 h-6 text-white hover:text-[#E7FF93] transition-colors duration-300" />
                </a>
                <a href="https://instagram.com" aria-label="Instagram">
                    <Instagram className="w-6 h-6 text-white hover:text-[#E7FF93] transition-colors duration-300" />
                </a>
            </motion.div>
        </motion.div>
    );
};

export default ContactForm;