import React, { Component } from 'react';

class BotAttackLogic extends Component {
  render() {
    return(
      <div>
        {
          this.props.botAndPlayerAttack()
        }
      </div>
    )
  }
}
export default BotAttackLogic
