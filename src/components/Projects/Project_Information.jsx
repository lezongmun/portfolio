import react, { useState, useRef, useEffect } from "react";
import  "./project_information.css";

const ProjectComponent = ({ project, scrollPosition }) => {
    const isVisible = scrollPosition >= project.start && scrollPosition <= project.end;
    return (
        <div className={isVisible ? "project" : "project hidden"}>
            <div className="project_title"> {project.title} </div>
            {/* <div className="project_role"> {project.role}</div> */}
            <div className="project_description"> {project.description}</div>
            <div className="project_techstack"> {project.techstack} </div>
            <div className="project_type"> {project.type}</div>
            <a href={project.github_link} className="project_github_link" 
                target="_blank" rel="noopener noreferrer">
                <span className="rounded-rectangle">view on GitHub</span>
            </a>
        </div>
    );
}




const ProjectInformation = ({ scrollPosition }) => {

    const [projectsStart, setProjectsStart] = useState(null);
    const [projectsEnd, setProjectsEnd] = useState(null);

    const [aroundnusStart, setAroundnusStart] = useState(null);
    const [aroundnusEnd, setAroundnusEnd] = useState(null);

    const [contechStart, setContechStart] = useState(null);
    const [contechEnd, setContechEnd] = useState(null);

    const [eatwhereStart, setEatwhereStart] = useState(null);
    const [eatwhereEnd, setEatwhereEnd] = useState(null);


    useEffect(() => {
        const projectsElement = document.getElementById("projects_images");
        if (projectsElement) {
            setProjectsStart(projectsElement.offsetTop);
            setProjectsEnd(projectsElement.offsetHeight + projectsElement.offsetTop);
        }

    
        const aroundnusElement = document.getElementById("aroundnus_images");
        if (aroundnusElement) {
          setAroundnusStart(aroundnusElement.offsetTop);
          setAroundnusEnd(aroundnusElement.offsetHeight + aroundnusElement.offsetTop);
        }

        const contechElement = document.getElementById("contech_images");
        if (contechElement) {
            setContechStart(contechElement.offsetTop);
            setContechEnd(contechElement.offsetHeight + contechElement.offsetTop);
        }

        const eatwhereElement = document.getElementById("eatwhere_images");
        if (eatwhereElement) {
            setEatwhereStart(eatwhereElement.offsetTop);
            setEatwhereEnd(eatwhereElement.offsetHeight + eatwhereElement.offsetTop);
        }
      }, []);

    const projects = [
        {
            id: "aroundnus", 
            title: "AroundNUS", 
            description: "Mobile application for obtaining information on any venue located in the National University of Singapore (NUS), as well as finding the fastest ways to get to a venue.",
            techstack: "flutter | firebase | android studio", 
            type: "Android App",
            github_link: "https://github.com/lezongmun/AroundNUS/blob/master/around_nus/README.md",    
            start: aroundnusStart- (aroundnusEnd-aroundnusStart)/10,
            end: aroundnusEnd - (aroundnusEnd-aroundnusStart)/2.9,
        },

        {
            id: "contech", 
            title: "Contech", 
            description: "Command Line Interface (CLI) application for managing computing-related contacts.", 
            techstack: "java", 
            type: "CLI App",
            github_link: "https://github.com/AY2122S1-CS2113T-T09-1/tp/blob/master/docs/README.md",    
            start: contechStart - (contechEnd-contechStart)/10,
            end: contechEnd - (contechEnd-contechStart)/2.8,
        },
    
        {
            id: "eatwheresg", 
            title: "EatWhereSG", 
            description: "Telegram Bot that helps groups to decide on a place to dine in, by considering members' preferences.", 
            // description: "Telegram Bot that helps groups to decide on a place to dine in by finding a central location amongst the members, and selecting nearby food options based on given food preferences.", 
            techstack: "python |  heroku", 
            type: "Telegram Bot",
            github_link: "https://github.com/lezongmun/WhatToEat",    
            start: eatwhereStart - (eatwhereEnd-eatwhereStart)/10,
            end: eatwhereEnd - (eatwhereEnd-eatwhereStart)/2.9,
        },
    ];

    const adjustedProjectsStart = (projectsStart - (aroundnusEnd-aroundnusStart)/10);
    const adjustedProjectsEnd = (projectsEnd - (eatwhereEnd-eatwhereStart)/2.9)

    const isVisible = scrollPosition >= adjustedProjectsStart && scrollPosition <= adjustedProjectsEnd;
    console.log(projects[0].start);
    return (
        <div id="projects_info" className={ isVisible ? "projects_info" : "projects_info hidden"}>
            <ProjectComponent project={projects[0]} scrollPosition={scrollPosition}/>
            <ProjectComponent project={projects[1]} scrollPosition={scrollPosition}/>
            <ProjectComponent project={projects[2]} scrollPosition={scrollPosition}/>
        </div>
    )

}

export default ProjectInformation;