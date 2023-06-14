import {React, useEffect, useState} from "react";
import "./about.css";


const About = ({ scrollPosition }) => {
    const [aboutMoveStart, setAboutMoveStart] = useState(null);


    useEffect(() => {
        const aboutMoveElement = document.getElementById("about_page");
        if (aboutMoveElement) {
            setAboutMoveStart(aboutMoveElement.offsetTop/1.6);
            console.log(aboutMoveElement.offsetTop);
        }

    }, []);
    
    let aboutAnimateClass = "";
    if (scrollPosition > aboutMoveStart) {
        aboutAnimateClass += "animate";
    }


    return (
        <div id="about">
            <div id="about_text" className={aboutAnimateClass}>
                <div className="about"> ABOUT </div>
                <div className="me">ME</div>
            </div>
            <div id="about_description" className={aboutAnimateClass}>
                Hello, I'm Le Zong and I'm a final year Computer Engineering student at the 
                National University of Singapore (NUS). My primary areas of interest lie 
                in Backend Engineering, Web Development, IoT and AI. In my free time, 
                I enjoy watching football and exercising.
            </div>

            {/* <div id="skills_button">
                Skills
            </div> */}

        </div>
        
    )

}

export default About;