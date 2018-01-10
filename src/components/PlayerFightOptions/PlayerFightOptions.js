import React, { Component } from 'react';

class PlayerFightOptions extends Component {

  render() {
    return(
      <div>
        <input type='submit' value='Attack' onClick={this.props.botAndPlayerAttack}/>
      </div>
    )
  }
}
export default PlayerFightOptions
