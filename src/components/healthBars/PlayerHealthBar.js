import React, { Component } from 'react';
import './HealthBar.css'

class PlayerHealthBar extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return(
      <div>
        <div className='HealthBarBox'>
          <div className='HealthBar'>
          </div>
        </div>
      </div>
    )
  }
}
export default PlayerHealthBar
