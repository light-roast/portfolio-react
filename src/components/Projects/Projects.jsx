import { useEffect } from "react";
import Projectcard from "./Projectcard/Projectcard";
import projects from "./Projectcard/Projects";
import "./Projects.css"
import PropTypes from 'prop-types';

function Projects({setNavLink}) {
    useEffect(() => {
        setNavLink('projects');
        window.scrollTo(0, 0);
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

Projects.propTypes = {
    setNavLink: PropTypes.func.isRequired,
  };

export default Projects;

            