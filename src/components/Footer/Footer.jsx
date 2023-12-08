import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css'
function Footer() {
    return ( <>
    <footer>
        <p>+573128985616 <i className="fab fa-whatsapp"></i></p>
        <a className="link" href="mailto:echeverri121@example.com" target="_blank" rel="noopener noreferrer">
            <i className="far fa-envelope"></i> echeverri121@gmail.com 
        </a>
        <a className="link" href="https://github.com/light-roast" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> @light-roast.
        </a>
        <a className="link" href="https://www.linkedin.com/in/daniel-echeverri-llano-b78330253/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> Linkedin.
        </a>
    </footer>
    </> 
    );
}

export default Footer;