import styles from './Skills.module.css';
import 'boxicons';
import { Icon } from '@iconify/react';

function Skills() {
    return ( 
    <>
    <section className={styles.creativeSkillsSection}>
            <div className={styles.skillsIcons}>
                <div className={styles.skillIcon}><h2 className={styles.skills}>Skills:</h2></div>
                <div className={styles.skillIcon}><i className="fab fa-js"></i></div>
                <div className={styles.div}><Icon icon="teenyicons:c-sharp-solid" width={48} height={48} color="#313531"/></div>
                <div className={styles.skillIcon}><i className="fab fa-python"></i></div>
                <div className={styles.skillIcon}><i className='bx bxl-typescript'></i></div>
                <div className={styles.skillIcon}><i className="fab fa-html5"></i></div>
                <div className={styles.skillIcon}><i className="fab fa-css3"></i></div>
                <div className={styles.div}><Icon icon="devicon-plain:dot-net-wordmark" width={48} height={48} color="#313531" /></div>
                <div className={styles.skillIcon}><i className="fab fa-react"></i></div>
                <div className={styles.skillIcon}><i className="fab fa-angular"></i></div>
                <div className={styles.skillIcon}><i className="fab fa-node"></i></div>
                <div className={styles.div}><h2 className={styles.csharp}> EF</h2></div>
                <div className={styles.skillIcon}><Icon icon="skill-icons:expressjs-light" width={48} height={48} fill="#313531"/></div>
                <div className={styles.skillIcon}><Icon icon="devicon-plain:azuresqldatabase" width={48} height={48} color="#313531" /></div>
                <div className={styles.skillIcon}><i className="fab fa-git"></i></div>
                <div className={styles.skillIcon}><i className="fa-brands fa-github"></i></div>
                <div className={styles.skillIcon}><i className="fas fa-terminal"></i></div>
                <div className={styles.div}><Icon icon="logos:jwt-icon" width={40} height={40} color="#313531"/></div> 
                <div className={styles.skillIcon}><i className='bx bxl-tailwind-css'></i></div>
                <div className={styles.div}><Icon icon="simple-icons:blazor" width={48} height={48} color="#313531"/></div>                              
            </div>
        </section>     
    </> 
    );
}

export default Skills;