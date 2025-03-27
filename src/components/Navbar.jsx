import React from 'react';

const Navbar = () => {
  return (
    <nav className="font-brut w-full h-28 fixed top-0 left-0 flex items-center justify-end px-10 py-4 z-50">
      <div className="flex flex-row md:gap-40 text-white text-sm">
        <p className="cursor-pointer hover:opacity-80 transition">HOME</p>
        <p className="cursor-pointer hover:opacity-80 transition">CONTACT</p>
        <p className="cursor-pointer hover:opacity-80 transition">PROJECTS</p>
        <p className="cursor-pointer hover:opacity-80 transition">ABOUT ME</p>
      </div>
    </nav>
  );
};

export default Navbar;