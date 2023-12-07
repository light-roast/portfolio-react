import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <NavBar />
    <Router>
      <>        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </>
    </Router>
    </>
  );
}

export default App;
