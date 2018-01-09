import React, {Component } from 'react';
import PlayerFightOptions from '../PlayerFightOptions/PlayerFightOptions.js'

class FightScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
    // this. = this. .bind(this)
  }

  render() {
    return (
      <div>
        {
          this.props.whoseTurn()?
          <PlayerFightOptions botAndPlayerAttack={this.props.botAndPlayerAttack}/>:
          <p>Enemies Turn</p>
        }
      </div>
    )
  }
}
export default FightScreen
