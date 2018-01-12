import React, { Component } from 'react';
import PlayerWin from './PlayerWin/PlayerWin.js'
import BotWin from './BotWin/BotWin.js'

class EndGameScreen extends Component {
  render() {
    return (
      <div>
      {
        this.props.stageCounter >=4 ?
          <PlayerWin stageCounter={this.props.stageCounter}/>:
          <BotWin stageCounter={this.props.stageCounter}/>
      }
      </div>
    )
  }
}
export default EndGameScreen
