import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {


  render() {
    console.log(this.props.bands.bands)
    debugger
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        {this.props.bands.bands.map(band => <li>{band.name}</li>)}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    bands: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (band) => dispatch({type: "ADD_BAND", band})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
