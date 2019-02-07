import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Buttons from './Buttons'
import Image from './Image'

const App = () => {
  return (
    <Router>
      <div className='main'>
        <header>
          <h1>Where is Ishan?</h1>
        </header>
        <Image />
        <div className='button-container'>
          <Buttons id="1"/>
          <Buttons id="2"/>
          <Buttons id="3"/>
          <Buttons id="4"/>
        </div>
        

      </div >
    </Router>
    
  )
}

export default App

