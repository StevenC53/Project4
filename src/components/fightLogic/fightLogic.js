import React, { Component } from 'react';
import FightScreen from '../FightScreen/FightScreen.js'

class Fight extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playerHealth: 100,
      botHealth: 100,
      turnCounter: 0
    }
    this.whoseTurn = this.whoseTurn.bind(this)
    this.botAndPlayerAttack = this.botAndPlayerAttack.bind(this)
    this.botAttack = this.botAttack.bind(this)
  }

    whoseTurn() {
      if (this.state.turnCounter % 2 === 0){
        return true
      }
      else {
        return false
      }
    }
    botAttack() {
      let doesBotHit = Math.floor(Math.random() * 21) >= 10
      let damage = Math.floor(Math.random()* 36) + 1
      let currentPlayerHealth = this.state.playerHealth
      doesBotHit?
          this.setState({playerHealth: currentPlayerHealth - damage}):
          null
    }

    botAndPlayerAttack() {
      let currentBotHealth = this.state.botHealth
      let damage = Math.floor(Math.random()* 36) + 1
      this.whoseTurn()?
         this.setState({botHealth: currentBotHealth - damage}):
         this.botAttack()
      this.setState({turnCounter: this.state.turnCounter + 1})
       }

    render() {
      return (
        <div className="fight">
        <FightScreen whoseTurn={this.whoseTurn} botAndPlayerAttack={this.botAndPlayerAttack}/>
        </div>
      )
    }
}
export default Fight
