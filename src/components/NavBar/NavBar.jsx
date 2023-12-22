import { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NavBar = ({navInfo}) => {
  const [activeLink, setActiveLink] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    setActiveLink(navInfo);
  }, [navInfo]);

  const handleCLick = (sortOption) => {
    setActiveLink(sortOption);
    closeNav(); 
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <nav className={`nav ${isNavOpen ? "nav-open" : ""}`}>
        <input type="checkbox" id="nav-check" checked={isNavOpen} onChange={toggleNav} />
        <div className="nav-header">
          <div className="nav-title">My Portfolio</div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <Link to="/" onClick={() => handleCLick('home')} className={activeLink === 'home' ? 'active' : 'inactive'}>
            Home
          </Link>
          <Link
            to="/projects"
            onClick={() => handleCLick('projects')}
            className={activeLink === 'projects' ? 'active' : 'inactive'}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={() => handleCLick('contact')}
            className={activeLink === 'contact' ? 'active' : 'inactive'}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

NavBar.propTypes = {
  navInfo: PropTypes.string.isRequired,
};

export default NavBar;
