import react from "react";
import "./projects.css";
import Information from "./Information";
import Images from "./Images";


const Projects = ({ scrollPosition }) => {

    return (
        <div id="projects">
            <Images scrollPosition={scrollPosition}/> 
            <Information scrollPosition={scrollPosition}/>
        </div>
    )

}

export default Projects;