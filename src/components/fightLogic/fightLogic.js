import React, { Component } from 'react';
import FightScreen from '../FightScreen/FightScreen.js'
import EndGameScreen from '../EndGame/EndGameScreen.js'

class Fight extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playerHealth: 100,
      botHealth: 100,
      turnCounter: 0,
      playerWin: false,
      botWin: false
    }
    this.whoseTurn = this.whoseTurn.bind(this)
    this.botAndPlayerAttack = this.botAndPlayerAttack.bind(this)
    this.botAttack = this.botAttack.bind(this)
    this.dealPlayerDamage = this.dealPlayerDamage.bind(this)
    this.botMiss = this.botMiss.bind(this)
    this.dealBotDamage = this.dealBotDamage.bind(this)
    this.playerDamage = this.playerDamage.bind(this)
    this.botDamage = this.botDamage.bind(this)
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
      doesBotHit?
          this.dealBotDamage():
          this.botMiss()
    }

    botMiss() {
      return (
        <p className='botMiss'>The enemy shoots at you but just misses</p>
      )
    }

    dealBotDamage() {
      let damage = Math.floor(Math.random()* 36) + 1
      let currentPlayerHealth = this.state.playerHealth
      let checkForWin = currentPlayerHealth - damage > 0
      checkForWin?
        this.botDamage(damage):
        this.setState({playerHealth: 0, botWin: true})
    }

    botDamage(damage) {
      let currentPlayerHealth = this.state.playerHealth
      this.setState({playerHealth: currentPlayerHealth - damage})
      return (
        <p className='botHits'> The enemy shoots you for {damage} damage</p>
      )
    }

    botAndPlayerAttack() {
      this.whoseTurn()?
         this.dealPlayerDamage():
         this.botAttack()
      this.setState({turnCounter: this.state.turnCounter + 1})
       }


    dealPlayerDamage() {
      let currentBotHealth = this.state.botHealth
      let damage = Math.floor(Math.random()* 36) + 1
      let checkForWin = currentBotHealth - damage > 0
      checkForWin?
        this.playerDamage(damage):
        this.setState({botHealth: 0, playerWin: true})
    }

    playerDamage(damage) {
      let currentBotHealth = this.state.botHealth
      this.setState({botHealth: currentBotHealth - damage})
      return (
        <p className='PlayerDamage'> You dealt {damage} damage to the enemy!</p>
      )
    }

    render() {
      return (
        <div className="fight">
          {
            this.state.botWin || this.state.playerWin?
              <EndGameScreen botWin={this.state.botWin} playerWin={this.state.playerWin} />:
              <FightScreen botHealth={this.state.botHealth} playerHealth={this.state.playerHealth} whoseTurn={this.whoseTurn} botAndPlayerAttack={this.botAndPlayerAttack} name={this.props.name} />

          }

        </div>
      )
    }
}
export default Fight
