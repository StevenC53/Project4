import React, {Component } from 'react';

class BotDamageDisplay extends Component {
  render() {
    return (
      <div>
      {
        this.props.botHit?
        <div><p className='botHits'>You got hit for {this.props.currentBotAttack} damage.  You have {this.props.playerHealth} health.</p></div>:
        <div><p className='botMiss'>The enemy misses you with its attack.  You have {this.props.playerHealth} health.</p></div>
      }
      </div>
    )
  }

}
export default BotDamageDisplay
