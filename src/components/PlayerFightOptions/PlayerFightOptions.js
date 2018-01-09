import React, { Component } from 'react';

class PlayerFightOptions extends Component {

  constructor(props) {
    super(props)
    this.state= {

    }
    // this. = this. .bind(this)
  }


  render() {
    return(
      <div>
        <input type='submit' value='Attack' onClick={this.props.botAndPlayerAttack}/>
      </div>
    )
  }
}
export default PlayerFightOptions
