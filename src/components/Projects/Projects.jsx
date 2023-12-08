import Projectcard from "./Projectcard/Projectcard";
import projects from "./Projectcard/Projects";


function Projects() {
    return (
        projects.map((project) => (
            <Projectcard key={project.id} project={project} />
        ))
    );    
}

export default Projects;

