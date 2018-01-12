import React, { Component } from 'react';

class BotWin extends Component {
  render() {
    return(
      <div className='BotVictory'>
        <h3>Oh no!  The evil bot Billy Bob has Defeated you.  You cleared {this.props.stageCounter} Stage(s). Better luck next time!!</h3>
      </div>
    )
  }
}
export default BotWin
