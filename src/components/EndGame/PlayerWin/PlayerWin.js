import React, { Component } from 'react';

class PlayerWin extends Component {
  render() {
    return(
      <div className='PlayerVictory'>
        <h3>Congratulations you have cleared all {this.props.stageCounter} stages!!!!</h3>
      </div>
    )
  }
}
export default PlayerWin
