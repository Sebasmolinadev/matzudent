import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import isologo from './img/logo.png';

function App() {
  return (
    <div className='nav'>
      <div className='isolg'>
        <img src={isologo} alt="Matzu"/>
      </div>

      <ul className="nav-list">
        <li className="nav-item">
          <a href="#home" className="nav-link">Acerca de nosotros</a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">Centro de conocimientos</a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link">Testimonios</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">Contactanos</a>
        </li>
      </ul>


    </div>

  )

}

export default App
