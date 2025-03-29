import React, { useRef, useEffect } from "react";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skillscont from "./components/Skillscont.jsx";
import Contacts from "./components/Contact.jsx";
import "@fontsource/libre-barcode-39-text";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const scrollRef = useRef(null);
  const locomotiveScroll = useRef(null);
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      locomotiveScroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
    }

    return () => {
      if (locomotiveScroll.current) {
        locomotiveScroll.current.destroy();
      }
    };
  }, []);

  const scrollToSection = (sectionRef) => {
    if (locomotiveScroll.current && sectionRef.current) {
      locomotiveScroll.current.scrollTo(sectionRef.current, {
        offset: -100,
        duration: 2,
        disableLerp: true,
      });
    }
  };

  return (
    <div ref={scrollRef} className="bg-black min-h-screen flex flex-col overflow-x-hidden relative">
      <Navbar 
        scrollToSection={scrollToSection} 
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        projectsRef={projectsRef} 
        contactsRef={contactsRef} 
        skillsRef={skillsRef} 
      />
      
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Skillscont ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contacts ref={contactsRef} />
    </div>
  );
};

export default App;