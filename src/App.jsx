import React from "react";
import Home from "./components/Home/Home";
import { useState, useEffect } from "react";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects"

const App = () => {
    let bgWhiteClass = "";
    const [scrollPosition, setScrollPosition] = useState(0);
    const [bgWhiteStart, setBgWhiteStart] = useState(null);


    useEffect(() => {
        const bgWhiteStartElement = document.getElementById("about_page");
        if (bgWhiteStartElement) {
            setBgWhiteStart(bgWhiteStartElement.offsetTop / 2.5);
        }

      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    if (scrollPosition > bgWhiteStart) {
        bgWhiteClass += "bg-white";
    }

    return (
        <div id="App" className={`App + ${bgWhiteClass}`}>
            
            <NavBar scrollPosition={scrollPosition}/>

            <section id="home_page" className="page">
                <Home scrollPosition={scrollPosition}/>
            </section>

            <section id="about_page" className={"page"}>
                <About scrollPosition={scrollPosition}/>
            </section>
            
            <section id="skills_page" className="page">
                <Skills scrollPosition={scrollPosition}/>
            </section>

            <section id="projects_page" className="page">
                <Projects scrollPosition={scrollPosition}/>
            </section>

            {/* <section id="experience_page" className="page">
                EXPERIENCE
            </section> */}

            <section id="contact_page" className="page">
                <Contact/>
            </section>


        </div>        
    );
}

export default App;