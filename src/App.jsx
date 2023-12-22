import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {
  const [navLink, setNavLink] = useState('');

  
  return (
    <>
    <Router>
        <NavBar navInfo={navLink}/>
        <Routes>
          <Route path="/" element={<Home setNavLink={setNavLink}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
      <Footer />
    </> 
  );
}

export default App;
