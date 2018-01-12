import React, {Component } from 'react';

class BotDamageDisplay extends Component {
  render() {
    return (
      <div>
      {
        this.props.botHit?
        <div><p>You got hit for {this.props.currentBotAttack} damage.  You have {this.props.playerHealth} health.</p></div>:
        <div><p>The enemy misses you with its attack.  You have {this.props.playerHealth} health.</p></div>
      }
      </div>
    )
  }

}
export default BotDamageDisplay
