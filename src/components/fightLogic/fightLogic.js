import React, { Component } from 'react';
import FightScreen from '../FightScreen/FightScreen.js'
import EndGameScreen from '../EndGame/EndGameScreen.js'
import PlayerDamageDisplay from '../damageDisplay/playerDamageDisplay.js'
import BotDamageDisplay from '../damageDisplay/botDamageDisplay.js'

class Fight extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playerHealth: 100,
      currentPlayerAttack: 0,
      currentBotAttack: 0,
      botHealth: 100,
      turnCounter: 0,
      botWin: false,
      potionCounter: 1,
      stageCounter: 0,
      botHit: false
    }
    this.whoseTurn = this.whoseTurn.bind(this)
    this.botAndPlayerAttack = this.botAndPlayerAttack.bind(this)
    this.botAttack = this.botAttack.bind(this)
    this.dealPlayerDamage = this.dealPlayerDamage.bind(this)
    this.botMiss = this.botMiss.bind(this)
    this.dealBotDamage = this.dealBotDamage.bind(this)
    this.playerDamage = this.playerDamage.bind(this)
    this.botDamage = this.botDamage.bind(this)
    this.botWin = this.botWin.bind(this)
    this.playerWin = this.playerWin.bind(this)
    this.checkForPotion = this.checkForPotion.bind(this)
    this.usePotion = this.usePotion.bind(this)
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
      let stage = this.state.stageCounter
      let doesBotHit = Math.floor(Math.random() * 21) >= (10 - stage)
      this.setState({botHit: doesBotHit})
      doesBotHit?
          this.dealBotDamage():
          this.botMiss()
          // return false
    }

    botMiss() {
      // return true
      return (
        <p className='botMiss'>The enemy shoots at you but just misses</p>
      )
    }

    usePotion() {
      let currentPlayerHealthPlusPotion = this.state.playerHealth + 50
      let playerHealth = this.state.playerHealth
      console.log(playerHealth)
      console.log(currentPlayerHealthPlusPotion)
      let potions = this.state.potionCounter -1
      let turn = this.state.turnCounter +1
      currentPlayerHealthPlusPotion > 100?
      this.setState({playerHealth: 100, potionCounter: potions, turnCounter: turn}):
      this.setState({playerHealth: currentPlayerHealthPlusPotion, potionCounter: potions, turnCounter: turn})
    }

    checkForPotion() {
      let pot = this.state.potionCounter
      console.log(pot)
      this.state.potionCounter >= 1?
      this.usePotion():
      alert('You have no potions')
    }


    dealBotDamage() {
      let damage = Math.floor(Math.random()* 36) + 1
      this.setState({currentBotAttack: damage})
      let currentPlayerHealth = this.state.playerHealth
      let checkForWin = currentPlayerHealth - damage > 0
      checkForWin?
        this.botDamage(damage):
        this.botWin()
    }
    botWin() {
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
      this.setState({currentPlayerAttack: damage})
      let checkForWin = currentBotHealth - damage > 0
      checkForWin?
        this.playerDamage(damage):
        this.playerWin()
    }

    playerWin() {
      let potion = this.state.potionCounter
      let stage = this.state.stageCounter
      this.setState({botHealth: 100, potionCounter: potion + 1, stageCounter: stage + 1, turnCounter: 0})
    }

    playerDamage(damage) {
      let currentBotHealth = this.state.botHealth
      this.setState({botHealth: currentBotHealth - damage})
      console.log(damage)
      return (
        <p className='PlayerDamage'> You dealt {damage} damage to the enemy</p>
      )
    }

    render() {
      return (
        <div className="fight">
          {
            this.state.stageCounter >= 4 || this.state.botWin?
              <EndGameScreen botWin={this.state.botWin} stageCounter={this.state.stageCounter}/>:
              <FightScreen
              stageCounter={this.state.stageCounter}
              botHealth={this.state.botHealth}
              playerHealth={this.state.playerHealth}
              whoseTurn={this.whoseTurn}
              botAndPlayerAttack={this.botAndPlayerAttack}
              name={this.props.name}
              checkForPotion={this.checkForPotion}
              />

          }
          {
            this.state.stageCounter!==4 && !this.state.botWin?
            <p>You have {this.state.potionCounter} potion(s).  Each one will heal you for 50 health</p>:
            <p></p>

          }
          {
            this.state.turnCounter!==0 && this.state.stageCounter!==4 && !this.state.botWin?
              <div>
                <BotDamageDisplay botHit={this.state.botHit} playerHealth={this.state.playerHealth} currentBotAttack={this.state.currentBotAttack}/>
                <PlayerDamageDisplay currentPlayerAttack={this.state.currentPlayerAttack} botHealth={this.state.botHealth}/>
              </div>:
              <div> </div>
          }
        </div>
      )
    }
}
export default Fight
