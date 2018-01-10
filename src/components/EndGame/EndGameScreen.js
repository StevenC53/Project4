import React, { Component } from 'react';
import PlayerWin from './PlayerWin/PlayerWin.js'
import BotWin from './BotWin/BotWin.js'

class EndGameScreen extends Component {
  render() {
    return (
      <div>
      {
        this.props.playerWin?
          <PlayerWin />:
          <BotWin />
      }
      </div>
    )
  }
}
export default EndGameScreen
