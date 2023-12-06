import { useState } from 'react'
import './App.css'
import { BrowserRouter, Router } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar/>
      </BrowserRouter>
    </>
  )
}

export default App
