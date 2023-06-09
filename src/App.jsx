import React from "react";
import Home from "./components/Home/Home";
import { useState, useEffect } from "react";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects"
// import Main from "./Main"
// import { Routes, Route } from 'react-router-dom';

const App = () => {
    const [scrollPosition, setScrollPosition] = useState(0);


    // add an event listener to check for scrolling at the beginning
    // setScrollPosition everytime a scroll event is heard
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



            <section id="home_page" className="page">
                <Home scrollPosition={scrollPosition}/>
            </section>

            <section id="about_page" className="page">
                <About scrollPosition={scrollPosition}/>
            </section>
            
            <section id="skills_page" className="page">
                <Skills scrollPosition={scrollPosition}/>
            </section>

            <section id="projects_page" className="page">
                <Projects scrollPosition={scrollPosition}/>
            </section>

            <section id="contact_page" className="page">
                <Contact/>
            </section>

            {/* <Routes>
                <Route path="/" element={<Main scrollPosition={scrollPosition}/>} />
                <Route path="/about" element={<About scrollPosition={scrollPosition} />} />
                <Route path="/skills" element={<Skills />} />
            </Routes>
 */}

        </div>        
    );
}

export default App;