// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state ={
    name: ''
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ''})
    
    
  }

  
  handleOnChange = (event) => {
    console.log(this.state)

    this.setState({name: event.target.value})
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange}/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
