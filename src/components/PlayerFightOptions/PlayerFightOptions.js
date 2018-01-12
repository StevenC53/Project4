import React, { Component } from 'react';

class PlayerFightOptions extends Component {

  render() {

    return(
      <div>
        <input className='blue' type='button' value='Attack' onClick={this.props.botAndPlayerAttack}/>
        <input className='red' type='button' value='Potion' onClick={this.props.checkForPotion}/>
      </div>
    )
  }
}
export default PlayerFightOptions
