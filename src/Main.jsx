import React from "react";
import Home from "./components/Home/Home";
import { useState, useEffect } from "react";

import "./main.css";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects"

const Main = ( {scrollPosition} ) => {


    return (
        <div className="App">
            
            <NavBar scrollPosition={scrollPosition}/>


            <section id="home_page" className="page">
                <Home scrollPosition={scrollPosition}/>
            </section>

            <section id="about_page" className="page">
                <About scrollPosition={scrollPosition}/>
            </section>
            

            <section id="projects_page" className="page">
                <Projects scrollPosition={scrollPosition}/>
            </section>

            <section id="contact_page" className="page">
                <Contact/>
            </section>
        </div>        
    );
}

export default Main;