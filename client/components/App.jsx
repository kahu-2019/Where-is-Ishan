import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Buttons from './Buttons'
import Image from './Image'

import {getPlaceFull} from '../api/apiRoute'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

    
  render(){
     return (
    <Router>
      <div className='main'>
        <header>
          <h1>Where is Ishan?</h1>
          <button>Randomize</button>
        </header>
        <Image />
        <div className='button-container'>
          <Buttons />
          
        </div>
        

      </div >
    </Router>
    
  )
  }
 
}

export default App

