import React, {Fragment} from 'react'

import {getPlaceName} from '../api/apiRoute'

class Buttons extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      place: []
    }
  }

  componentDidMount(){
    getPlaceName().then(place => {
      this.setState({place: place})
    })
      
  }

  render(){
    return(
      <Fragment>
        {this.state.place.map(place => 
          <button>{place.name}</button>
        )}
      </Fragment>
    )
  }
}

export default Buttons