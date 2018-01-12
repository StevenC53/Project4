import React, {Component } from 'react';

class PlayerDamageDisplay extends Component {
  render() {
    return (
      <div>
      {
        this.props.currentPlayerAttack > 0?
        <div><p>You hit the enemy for {this.props.currentPlayerAttack} damage.  They have {this.props.botHealth} health.</p></div>:
        <div><p>You missed the enemey</p></div>
      }
      </div>
    )
  }

}
export default PlayerDamageDisplay
