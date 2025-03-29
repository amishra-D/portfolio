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

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef} className="bg-black min-h-screen flex flex-col overflow-x-hidden relative">
      <Navbar />
      <Home />
      <About />
      <Skillscont />
      <Projects />
      <Contacts />
    </div>
  );
};

export default App;
