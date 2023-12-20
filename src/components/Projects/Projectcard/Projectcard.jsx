import "./Projectcard.css";
import PropTypes from 'prop-types';

function Projectcard({project}) {
    return ( 
    <>
        <div className="cards">
                    <div className='image-container'>
                        <img src={project.imageurl}/>
                    </div>
                    <h4 id="name">
                        {project.name}
                    </h4>
                    <div id="info">
                        
                            <p id="one">Technology stack</p>
                            <p id="two">GitHub repository URL</p>
                            {project.livelink ? (<p id="three">Live Site URL</p>) : <p id="three"></p>}
                        
                        
                            <h4 id="four" className="category">
                                {project.stack}
                            </h4>
                            <a id="five" href={project.gitlink} className="category">
                                <i className="fab fa-github"></i>GitHub.
                            </a>
                            {project.livelink ? (<a id="six" className="category" href={project.livelink}>Live site</a>) : <a id="six"></a>}                          
                        
                    </div>
                </div>
    </> 
    );
}

Projectcard.propTypes = {
    project: PropTypes.shape({
        imageurl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        stack: PropTypes.string.isRequired,
        gitlink: PropTypes.string.isRequired,
        livelink: PropTypes.string,
    }).isRequired,
};

export default Projectcard;