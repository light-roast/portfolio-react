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
                        <section className='left'>
                            <p>Technology stack:</p>
                            <p>GitHub repo:</p>
                            <p>Live Site URL:</p>
                        </section>
                        <section className='right'>
                            <h4 className="category">
                                {project.stack}
                            </h4>
                            <h5 className="category">
                                {project.gitlink}
                            </h5>
                            <p>{project.livelink}</p>

                        </section>
                    </div>
                </div>
    </> 
    );
}

export default Projectcard;