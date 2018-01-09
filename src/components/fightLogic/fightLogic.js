import React, { Component } from 'react';

class Fight extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playerHealth: 100,
      botHealth: 100,
      turnCounter: 0,
      playerTurn: true
    }
    this.whoseTurn = this.whoseTurn.bind(this)
    this.botAndPlayerAttack = this.botAndPlayerAttack.bind(this)
  }

    whoseTurn() {
      if (this.turnCounter %2 === 0){
        this.setState({playerTurn: true})
      }
      else {
        this.setState({playerTurn: false})
      }
    }

    botAndPlayerAttack() {
      let currentPlayerHealth = this.playerHealth
      let currentBotHealth = this.botHealth
      let doesBotHit = Math.floor(Math.random() * 21)
      let damage = Math.floor(Math.random()* 16) + 20
      console.log(damage)
      this.playerTurn ?
         this.setState({botHealth: currentBotHealth - damage}):
        doesBotHit >= 10 ?
          this.setState({playerHealth: currentPlayerHealth - damage}):
          null
    }

    render() {
      return (
        <div className="fight">
          <p>This is but a test</p>

        </div>
      )
    }
}
export default Fight
