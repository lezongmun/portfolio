import { React, useEffect }from "react";
import "./skills.css";

const SkillsColumn = ({skills}) => {

    return (
        <ul className="skill_type">
            {skills.map((skill, index) => 
                <li className="skill" key={index}>
                    {skill}
                </li>
            )}
        </ul>
    )
}


const Skills = () => {
    useEffect(() => { 
        var divisor = 10;
       
        const skillsStart = document.getElementById("about_page");
        const skillsStartPosition = skillsStart.offsetTop;
        var skills_word = document.getElementById("skills_word");


        function parallax() {
            var pos = 0 - window.scrollY/divisor;	
            skills_word.style.right = (skillsStartPosition/divisor) + pos + "%";
        }
        
        window.addEventListener("scroll", parallax);

        // Clean up the scroll event listener when the component unmounts or the page becomes hidden
        return () => {
            window.removeEventListener("scroll", parallax);
        };
    }, []);
    

    const skillList = [
        {
            type: "Programming Languages",
            skills: ["Java", "Python", "Golang", "C++", "Rust", "C"],
        },

        {
            type: "Web Development",
            skills: ["JavaScript", "React", "HTML", "CSS", "Java Sprint Boot (REST APIs)"],
        },

        {
            type: "Mobile Development",
            skills: ["Flutter"],
        },

        {
            type: "Big Data",
            skills: ["PostgreSQL", "Hadoop", "Spark"],
        },

        {
            type: "Software Tools",
            skills: ["GitHub", "Prometheus", "Grafana", "Splunk"],
        },

        // {
        //     type: "Monitoring and Logging",
        //     skills: ["Prometheus", "Grafana", "Splunk"],
        // },

        {
            type: "Embedded Systems",
            skills: ["Arduino", "Raspberry Pi", "ESP32", "FPGA"],
        },
    ]



    return (
        <div id="skills">
            <div id="skills_title">
                <div id="skills_word">
                    SKILLS
                </div>
            </div>
            <div id="skills_section">
                {
                    skillList.map((skillType) => (
                        <div className="skill_class" key={skillType.type}>
                            <div className="skill_header">
                                {skillType.type}
                            </div>
                            <div id={skillType.type}>
                                <SkillsColumn skills={skillType.skills}/>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </div> 
    )
}

export default Skills;