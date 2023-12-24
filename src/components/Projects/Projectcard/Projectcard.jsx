import "./Projectcard.css";
import PropTypes from 'prop-types';

function Projectcard({project}) {
    const h4Style = {
        display: 'inline',
        // Add any other styles you need
      };
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
                        
                            <h4 id="one" className="category">
                                {project.stack}
                            </h4>
                            <a id="four" href={project.gitlink} className="category">
                                <i className="fab fa-github"></i><h4 style={h4Style}>GitHub</h4>.
                            </a>
                            {project.livelink ? (<h4 id="two"><a  className="category" href={project.livelink}>Live site access.</a></h4>) : null}                          
                        
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