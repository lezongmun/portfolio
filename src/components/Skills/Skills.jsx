import React from "react";
import "./skills.css";
import { Link, Outlet } from 'react-router-dom';

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
    

    const skillList = [
        {
            type: "Programming Languages",
            skills: ["Java", "Python", "Golang", "C++", "Rust", "C"],
        },

        {
            type: "Web Development",
            skills: ["HTML", "CSS", "JavaScript", "React", "Java Sprint Boot (REST APIs)"],
        },

        {
            type: "Mobile Development",
            skills: ["Flutter"],
        },

        {
            type: "Databases",
            skills: ["PostgreSQL"],
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
            <div id="skills_section">
                {
                    skillList.map((skillType) => (
                        <div className="skill_class">
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
{/* 
            <div id="skills_text" className={skillsTextClassNames}>
                SKILLS
            </div>
            */}
            <Link to="/about">Go back</Link>
            <Outlet />




        </div>
        
    )

}

export default Skills;