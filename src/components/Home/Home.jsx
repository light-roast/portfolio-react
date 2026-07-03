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
                    <a className={styles.but} href="/resume.pdf" target="_blank" rel="noreferrer">
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
                    
<h3>I am a Full Stack Developer with 2 years of experience, specializing in backend development with .NET. I have a proven track record of delivering scalable solutions, optimizing performance, and modernizing legacy systems. I am passionate about clean architecture, Domain-Driven Design, and continuous learning. On this portfolio website, you can find an overview of all the personal <u className={styles.u} onClick={handleClick}>projects</u> I have completed. If you need to contact me, you can write to me <u className={styles.u} onClick={handleClickC}>here</u> or at my email address.</h3>
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