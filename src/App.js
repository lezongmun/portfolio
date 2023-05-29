import React from "react";
import Home from "./components/Home";
import { useState, useEffect } from "react";

import "./App.css";
import NavBar from "./components/NavBar";


const App = () => {
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
        <div className="App">
            <NavBar scrollPosition={scrollPosition}/>
            <section id="home_section" className="page">
                <Home scrollPosition={scrollPosition}/>
            </section>
            <section id="about_section" className="page">
                About
            </section>
            <section id="projects_section" className="page">
                Projects
            </section>
            <section id="contact_section" className="page">
                Contact
            </section>
        </div>
    );
}

export default App;