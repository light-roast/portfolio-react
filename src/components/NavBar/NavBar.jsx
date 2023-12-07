
import "./NavBar.css"
const NavBar = () => {
  

 
  return (
  <>
  <nav className="nav">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="nav-title">
      D.E/Portfolio
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <a href="/">Home</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
  </div>
</nav>
</>
  );
};

export default NavBar;