import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AnimatedButton = ({ text, type,downloadpdf,resume }) => {
    return (
        <button 
        onClick={text === "DOWNLOAD CV" ? () => downloadpdf(resume) : undefined}
        type={type} 
            className="z-40 mt-6 md:mt-10 relative isolate text-white 
            text-sm sm:text-base font-medium leading-normal flex justify-center 
            items-center px-6 py-1.5 sm:px-8 sm:py-2 md:py-3 md:px-12 
            rounded-full bg-transparent transition-all duration-200 ease-out 
            hover:text-black active:scale-95 group w-full sm:w-auto"
        >
            <div className="
                absolute inset-0 flex justify-center items-center 
                border-2 border-white rounded-full overflow-hidden -z-10 
                transition-all duration-200 ease-out 
                group-hover:scale-95 group-active:scale-90
            ">
                <div className="
                    absolute w-0 aspect-square rounded-full bg-white 
                    transition-all duration-200 ease-out 
                    group-hover:w-[120%]
                "></div>
            </div>

            <span className="text-base sm:text-lg font-bold flex items-center gap-1 sm:gap-2">
                {text} 
                {text === "SUBMIT FORM" && 
                    <ArrowRight 
                        size={20} 
                        className="text-white transition-all duration-200 
                        group-hover:text-white rounded-full group-hover:bg-black 
                        group-hover:translate-x-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    />
                }
            </span>
        </button>
    );
};

export default AnimatedButton;