import styles from './Skills.module.css';
function Skills() {
    return ( 
    <>
    <section className={styles.creativeSkillsSection}>
            <div className={styles.skillsIcons}>
                <div className={styles.skillIcon}><h2 className={styles.skills}>Skills:</h2></div>
                <div className={styles.skillIcon}><i className="fab fa-js"></i></div>
                <div className={styles.skillIcon}><h2 className={styles.csharp}>Ts</h2></div>
                <div className={styles.skillIcon}><i className="fab fa-html5"></i></div>
                <div className={styles.skillIcon}><i className="fab fa-css3"></i></div>
                <div className={styles.skillIcon}><i className="fab fa-react"></i></div>
                <div className={styles.skillIcon}><i className="fab fa-angular"></i></div>
                <div className={styles.skillIcon}><i className="fab fa-node"></i></div>
                <div className={styles.skillIcon}><h2 className={styles.express}>Express.js</h2></div>
                <div className={styles.skillIcon}><i className="fas fa-database"></i></div>
                <div className={styles.skillIcon}><h2 className={styles.csharp}>SQL</h2></div>
                <div className={styles.skillIcon}><i className="fab fa-git"></i></div>
                <div className={styles.skillIcon}><i className="fa-brands fa-github"></i></div>
                <div className={styles.skillIcon}><i className="fas fa-terminal"></i></div>
                <div className={styles.div}><h2 className={styles.csharp}>C#</h2></div>
                <div className={styles.skillIcon}><i className="fab fa-python"></i></div>
                                
            </div>
        </section>     
    </> 
    );
}

export default Skills;