import homeImage from '../../assets/me.png'
import devimage from '../../assets/is.jpg'
import styles from './Home.module.css'
function Home() {
    return ( 
        <>
            <main className={styles.main}>
                <section className={styles.firstSection}>
                    <h3>Hi, my name is </h3>
                    <h1>Daniel <span>Echeverri</span></h1>
                    <h2>I&apos;m a developer</h2>
                    <a href="https://drive.google.com/file/d/1ya_VJkUKz_x8P1SQcczQJRQU-fCjTdes/view?usp=sharing" target="_blank" rel="noreferrer">
                        <button type="button">Download CV</button>
                    </a>
                </section>
                <section className={styles.secondSection}>
                <img className={styles.img} src={homeImage} alt='A foto of me: Daniel Echeverri'></img>
                </section>
            </main> 
            <article className={styles.article}>
                <section className={styles.sectionB}>
                <img src={devimage} className={styles.devImg}/>
                </section>
                <section className={styles.sectionA}>
                    <h1>About me</h1>
                    <h3>I am a former teacher who is passionate about software development. I hold a Front-end Engineering certification from Codecademy, establishing a strong foundation in web development technologies. Additionally, I possess certifications in backend technologies and various programming languages including Python and C#. I consider myself a dedicated individual who enjoys learning new things, excels as a team player, and demonstrates organization and responsibility. My current objective is to secure a challenging and dynamic position where I can share my knowledge while continually acquiring new experience and skills.</h3>
                </section>
            </article>     
        </>
    )
}

export default Home;