import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Itagnok from './Itagnok'
import Contact from './Contact'
import Services from './Services'

function App() {
  return (
    <Router>
      <div className='App'>
        <div>
          <Link to="/" className='company-name'>Itagnok Technologies Ltd.</Link>
        </div>
        <div className='menu'>
          <Link to="/services" className='services'>Services</Link>
          <Link to="/contact" className='contact'>Contact us</Link>
        </div>
      </div>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Itagnok />} />
      </Routes>
    </Router>
  )
}

export default App