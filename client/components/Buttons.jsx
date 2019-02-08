import React, {Fragment} from 'react'

import {getPlaceName} from '../api/apiRoute'

class Buttons extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      placeArr: []
    }
  }

  componentDidMount(){
    getPlaceName().then(place => {
     this.setState({placeArr: place})
    })
      
  }

  render(){
    return(
      <Fragment>
        {this.state.placeArr.map(place => {
          <button>{place.name}</button>
        })}
      </Fragment>
    )
  }
}

export default Buttons