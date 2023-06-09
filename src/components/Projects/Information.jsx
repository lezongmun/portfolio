import react, { useState, useRef, useEffect } from "react";
import  "./information.css";

const ProjectComponent = ({ project, scrollPosition }) => {
    const isVisible = scrollPosition >= project.start && scrollPosition <= project.end;
    return (
        <div className={isVisible ? "project visible" : "project hidden"}>
            <div className="project_title"> {project.title} </div>
            {/* <div className="project_role"> {project.role}</div> */}
            <div className="project_description"> {project.description}</div>
            <div className="project_techstack"> {project.techstack} </div>
            <div className="project_type"> {project.type}</div>
        </div>
    );
}




const Information = ({ scrollPosition }) => {

    const [projectsStart, setProjectsStart] = useState(null);
    const [projectsEnd, setProjectsEnd] = useState(null);

    // const aroundnusRef = useRef(null);
    const [aroundnusStart, setAroundnusStart] = useState(null);
    const [aroundnusEnd, setAroundnusEnd] = useState(null);

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
            role: "UI/UX Designer", 
            description: "Mobile application to find the fastest way to get around the campus of the National University of Singapore.",
            techstack: "flutter | firebase | android studio", 
            type: "Android App",    
            start: aroundnusStart,
            end: aroundnusEnd - 300
        },
    
        {
            id: "eatwheresg", 
            title: "EatWhereSG", 
            role: "UI/UX Designer", 
            description: "", 
            techstack: "python |  heroku", 
            type: "Telegram Bot",
            start: eatwhereStart,
            end: eatwhereEnd - 300
        },
    ];

    const isVisible = scrollPosition >= projectsStart && scrollPosition <= projectsEnd - 300;
    return (
        <div id="projects_info" className={ isVisible ? "" : "hidden"}>
            <ProjectComponent project={projects[0]} scrollPosition={scrollPosition}/>
            <ProjectComponent project={projects[1]} scrollPosition={scrollPosition}/>
        </div>
    )

}

export default Information;