import styles from './Skills.module.css';
import 'boxicons';
import { Icon } from '@iconify/react';

function Skills() {
    return ( 
    <>
    <section className={styles.creativeSkillsSection}>
            <div className={styles.skillsIcons}>
                <div className={styles.skillIcon}><h2 className={styles.skills}>Skills:</h2></div>
                <div className={styles.skillIcon} title="JavaScript"><i className="fab fa-js"></i></div>
                <div className={styles.div} title="C#"><Icon icon="teenyicons:c-sharp-solid" width={48} height={48} color="#313531"/></div>
                <div className={styles.skillIcon} title="Python"><i className="fab fa-python"></i></div>
                <div className={styles.skillIcon} title="TypeScript"><i className='bx bxl-typescript'></i></div>
                <div className={styles.skillIcon} title="HTML"><i className="fab fa-html5"></i></div>
                <div className={styles.skillIcon} title="CSS"><i className="fab fa-css3"></i></div>
                <div className={styles.div} title=".NET"><Icon icon="devicon-plain:dot-net-wordmark" width={48} height={48} color="#313531" /></div>
                <div className={styles.skillIcon} title="React"><i className="fab fa-react"></i></div>
                <div className={styles.skillIcon} title="Angular"><i className="fab fa-angular"></i></div>
                <div className={styles.skillIcon} title="Node.js"><i className="fab fa-node"></i></div>
                <div className={styles.div} title="Entity Framework"><h2 className={styles.csharp}> EF</h2></div>
                <div className={styles.skillIcon} title="Express.js"><Icon icon="skill-icons:expressjs-light" width={48} height={48} fill="#313531"/></div>
                <div className={styles.skillIcon} title="SQL Server"><Icon icon="devicon-plain:azuresqldatabase" width={48} height={48} color="#313531" /></div>
                <div className={styles.skillIcon} title="Git"><i className="fab fa-git"></i></div>
                <div className={styles.skillIcon} title="GitHub"><i className="fa-brands fa-github"></i></div>
                <div className={styles.skillIcon} title="Bash / Shell"><i className="fas fa-terminal"></i></div>
                <div className={styles.div} title="JWT"><Icon icon="logos:jwt-icon" width={40} height={40} color="#313531"/></div> 
                <div className={styles.skillIcon} title="Tailwind CSS"><i className='bx bxl-tailwind-css'></i></div>
                <div className={styles.div} title="Blazor"><Icon icon="simple-icons:blazor" width={48} height={48} color="#313531"/></div>
                <div className={styles.skillIcon} title="Docker"><i className="fab fa-docker"></i></div>
                <div className={styles.skillIcon} title="Azure"><Icon icon="devicon-plain:azure" width={48} height={48} color="#313531"/></div>
                <div className={styles.skillIcon} title="MongoDB"><Icon icon="devicon-plain:mongodb-wordmark" width={48} height={48} color="#313531"/></div>
                <div className={styles.skillIcon} title="Accessibility (A11Y)"><i className="fa-solid fa-universal-access"></i></div>
                <div className={styles.div} title="Datadog"><Icon icon="simple-icons:datadog" width={48} height={48} color="#313531"/></div>
                <div className={styles.skillIcon} title="Go"><i className="fa-brands fa-golang"></i></div>
                <div className={styles.skillIcon} title="Linux"><i className="fab fa-linux"></i></div>
                <div className={styles.div} title="Redux"><Icon icon="devicon-plain:redux" width={48} height={48} color="#313531"/></div>
                <div className={styles.div} title="Postman"><Icon icon="devicon-plain:postman" width={48} height={48} color="#313531"/></div>
                <div className={styles.skillIcon} title="Jira"><Icon icon="devicon-plain:jira" width={48} height={48} color="#313531"/></div>
                <div className={styles.div} title="SonarQube"><Icon icon="simple-icons:sonarqube" width={48} height={48} color="#313531"/></div>
                <div className={styles.div} title="SQLite"><Icon icon="devicon-plain:sqlite" width={48} height={48} color="#313531"/></div>
                <div className={styles.div} title="GitHub Actions"><Icon icon="simple-icons:githubactions" width={48} height={48} color="#313531"/></div>
                <div className={styles.div} title="PowerShell"><Icon icon="simple-icons:powershell" width={48} height={48} color="#313531"/></div>
                <div className={styles.div} title="Confluence"><Icon icon="devicon-plain:confluence" width={48} height={48} color="#313531"/></div>
                <div className={styles.div} title="Umbraco CMS"><Icon icon="simple-icons:umbraco" width={48} height={48} color="#313531"/></div>
                <div className={styles.div} title="BrowserStack"><Icon icon="simple-icons:browserstack" width={48} height={48} color="#313531"/></div>
                <div className={styles.div} title="Logz.io"><h2 className={styles.csharp}> Logz.io</h2></div>

            </div>
        </section>     
    </> 
    );
}

export default Skills;