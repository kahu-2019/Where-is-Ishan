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
        <Buttons />

      </div >
    </Router>
    
  )
}

export default App

