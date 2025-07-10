import React, { useRef } from "react";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skillscont from "./components/Skillscont.jsx";
import Contacts from "./components/Contact.jsx";
import "@fontsource/libre-barcode-39-text";
import Moreabout from "./components/Moreabout.jsx";
import EachSkill from "./components/EachSkill.jsx";
import { ChevronUp } from 'lucide-react';
import Project from "./components/Project.jsx";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col overflow-x-hidden relative scroll-smooth">
      <div
        className="bg-[#CDEA68]/80 rounded-full w-16 h-16 flex justify-center items-center bottom-4 right-4 z-50 fixed scale-95 active:scale-100 active:[#CDEA68]"
        onClick={() => scrollToSection(homeRef)}
      >
        <ChevronUp size={28} color="white" />
      </div>

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
      <Moreabout/>
      <EachSkill />
      <Project ref={projectsRef}/>
      {/* <Projects ref={projectsRef} /> */}
      <Contacts ref={contactsRef} />
    </div>
  );
};

export default App;
