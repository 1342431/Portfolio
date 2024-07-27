import React from 'react'
import './App.css'
import Itagnok from './Itagnok'

function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <div>
          <span className='company-name'>Itagnok Technologies Ltd.</span>
        </div>
        <div className='menu'>
          <span className='services'>Services</span>
          <span className='contact'>Contact us</span>
        </div>
      </div>
      <Itagnok />
    </React.Fragment>
  )
}

export default App
