import "./projects.css";
import ProjectInformation from "./Project_Information";
import ProjectImages from "./Project_Images";


const Projects = ({ scrollPosition }) => {


    return (
        <div id="projects">
            <div id="projects_word"> PROJECTS </div>
            <ProjectImages scrollPosition={scrollPosition}/> 
            <ProjectInformation scrollPosition={scrollPosition}/>
        </div>
    )

}

export default Projects;