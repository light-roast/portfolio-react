import { useEffect } from "react";
import Projectcard from "./Projectcard/Projectcard";
import projects from "./Projectcard/Projects";
import "./Projects.css"

function Projects({setNavLink}) {
    useEffect(() => {
        setNavLink('projects')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <section id="mainSection">
                {
                    projects.map((project) => {
                        return <Projectcard key={project.id} project={project} />
                    })
                }
         </section>
    );    
}

export default Projects;

            