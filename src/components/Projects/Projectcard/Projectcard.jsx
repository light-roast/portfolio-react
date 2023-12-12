import "./Projectcard.css";

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
                            <p id="three">Live Site URL</p>
                        
                        
                            <h4 id="four" className="category">
                                {project.stack}
                            </h4>
                            <a id="five" href={project.gitlink} className="category">
                                <i className="fab fa-github"></i>GitHub.
                            </a>
                            {project.livelink ? (<a id="six" className="category" href={project.livelink}>Live site</a>) : null}                          
                        
                    </div>
                </div>
    </> 
    );
}

export default Projectcard;