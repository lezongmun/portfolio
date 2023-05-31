import React from "react";
import "./skills.css";

const Skills = ({ scrollPosition }) => {
    
    let skillsTextClassNames = "";
    if (scrollPosition > 1050) { // CHANGE THISSS
        skillsTextClassNames += "animate";
    }


    return (
        <div id="skills">
             <div id="skills_description" className={skillsTextClassNames}>
                I am a passionate and dedicated individual with a love for technology and a 
                strong background in software engineering. With several years of experience 
                in the field, I have honed my skills in developing innovative solutions and 
                collaborating with cross-functional teams.
            </div>
            <div id="skills_text" className={skillsTextClassNames}>
                SKILLS
            </div>
           
            
        </div>
        
    )

}

export default Skills;