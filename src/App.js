import React from "react";
import Home from "./components/Home";
import "./App.css";
import NavBar from "./components/NavBar";


const App = () => {
    return (
        <div className="App">
            <NavBar/>
            <section id="home_section" className="page">
                <Home/>
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