import homeImage from '../../assets/meL.png'
import devimage from '../../assets/is.jpg'
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'
import Skills from '../Skills/Skills';
import PropTypes from 'prop-types';
import { useEffect } from 'react';


function Home({setNavLink}) {
    useEffect(() => {
        setNavLink('home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const navigate = useNavigate();

    function handleClick() {
      navigate('/projects');
      setNavLink('projects')
    }
    function handleClickC() {
        navigate('/contact');
        setNavLink('contact')
      }
    return ( 
        <>
            <main className={styles.main}>
                <section className={styles.firstSection}>
                    <h3>Hi, my name is </h3>
                    <h1>Daniel <span>Echeverri</span></h1>
                    <h2>I&apos;m a full stack developer</h2>
                    <a className={styles.but} href="https://drive.google.com/file/d/1ya_VJkUKz_x8P1SQcczQJRQU-fCjTdes/view?usp=sharing" target="_blank" rel="noreferrer">
                        <button type="button">Download CV</button>
                    </a>
                </section>
                <section className={styles.secondSection}>
                <img className={styles.img} src={homeImage} alt='A foto of me: Daniel Echeverri' id="levitating-img"></img>
                </section>
            </main> 
            <article>
                <section className={styles.article}>
                <div className={styles.sectionB}>
                <img src={devimage} className={styles.devImg}/>
                </div>
                <div className={styles.sectionA}>
                    <h1><u>About me</u></h1>
                    
<h3>I am a former teacher with a passion for software development. I hold a Front-end Engineering certification from Codecademy, establishing a robust foundation in web development technologies. Additionally, I am certified in backend technologies and proficient in various programming languages, including Python and C#. I consider myself a dedicated individual who enjoys learning new things, excels as a team player, and demonstrates strong organizational skills and responsibility. On this portfolio website, you can find an overview of all the <u className={styles.u} onClick={handleClick}>projects</u> I have successfully completed. If you need to contact me, you can write to me <u className={styles.u} onClick={handleClickC}>here</u> or at my email address found in the footer.</h3>
                </div>
                </section>
            </article>
            <Skills/>
        </>
    )
}

Home.propTypes = {
    setNavLink: PropTypes.func.isRequired,
  };

export default Home;