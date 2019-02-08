import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Buttons from './Buttons'
import Image from './Image'

import {getPlaceName} from '../api/apiRoute'
 //TODO 

const App = () => {

  function runFunctions(){
    getPlaceName()
    getPlaceFull()
    
  }
  return (
    <Router>
      <div className='main'>
        <header>
          <h1>Where is Ishan?</h1>
          <button onClick={runFunctions}>Randomize</button>
        </header>
        <Image />
        <div className='button-container'>
          <Buttons />
          
        </div>
        

      </div >
    </Router>
    
  )
}

export default App

