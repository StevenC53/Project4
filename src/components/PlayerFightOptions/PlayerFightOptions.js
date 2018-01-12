import React, { Component } from 'react';

class PlayerFightOptions extends Component {

  render() {

    return(
      <div>
        <input type='button' value='Attack' onClick={this.props.botAndPlayerAttack}/>
        <input type='button' value='Potion' onClick={this.props.checkForPotion}/>
      </div>
    )
  }
}
export default PlayerFightOptions
