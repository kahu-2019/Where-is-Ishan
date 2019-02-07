import React, {Fragment} from 'react'

class Image extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Fragment>
        <div className='image-container'>
        <img src="https://maps.googleapis.com/maps/api/staticmap?center=-40.624116,175.284702&zoom=12&scale=1&size=600x300&maptype=satellite&format=png&visual_refresh=true&key=AIzaSyAHciFTN54JS1w-iheiqpAN47wvNbx889I">
        </img>
        </div>
      </Fragment>
    )
  }
}

export default Image