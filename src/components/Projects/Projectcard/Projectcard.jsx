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
                        
                            <p id="one">Technology stack:</p>
                            <p id="two">GitHub repo:</p>
                            <p id="three">Live Site URL:</p>
                        
                        
                            <h4 id="four" className="category">
                                {project.stack}
                            </h4>
                            <p id="five" className="category">
                                {project.gitlink}
                            </p>
                            <p id="six">{project.livelink}</p>

                        
                    </div>
                </div>
    </> 
    );
}

export default Projectcard;