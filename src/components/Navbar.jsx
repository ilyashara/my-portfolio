import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 p-5">
        <nav className="border-none justify-between md:flex flex-row items-center text-center">
          <a href="#about" className="mr-5">
            <img className="inline h-8" src="./hara.png" alt="hara"/>
          </a>
          <div>
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#formations" className="mr-5 hover:text-white">
            Studies
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          </div>
          <div>
            <a href="#contact" className="mr-5 hover:text-white">
              Let's talk!
            </a>
          </div>
        </nav>
    </header>
  );
}