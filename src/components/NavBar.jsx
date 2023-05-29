import React from "react";
import { useState, useEffect } from "react";

import "./navbar.css";

const NavBar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <nav id="navbar" className={scrollPosition > 290 ? 'bg-white' : ''}>
            <ul>
                <li><a href="#home" className="navbar_item active">HOME</a></li>
                <li><a href="#about" className="navbar_item">ABOUT</a></li>
                <li><a href="#projects" className="navbar_item">PROJECT</a></li>
                <li><a href="#contact" className="navbar_item">CONTACT</a></li>

            </ul>
        </nav>
    )

}

export default NavBar;