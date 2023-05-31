import React from "react";
import "./about.css";

const About = ({ scrollPosition }) => {
    
    let aboutTextClassNames = "";
    if (scrollPosition > 400) {
        aboutTextClassNames += "animate";
    }


    return (
        <div id="about">
            <div id="about_text" className={aboutTextClassNames}>
                <div className="about"> ABOUT </div>
                <div className="me">ME</div>
            </div>
            <div id="about_description" className={aboutTextClassNames}>
                I am a passionate and dedicated individual with a love for technology and a 
                strong background in software engineering. With several years of experience 
                in the field, I have honed my skills in developing innovative solutions and 
                collaborating with cross-functional teams.
            </div>
            
        </div>
        
    )

}

export default About;