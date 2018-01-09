import React, { Component } from 'react';
import Creation from '../Creation/Creation.js'
import Fight from '../fightLogic/fightLogic.js'

class FightContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hasName: false,
      name: ''
    }
    this.onSubmitQuery = this.onSubmitQuery.bind(this)
    this.handleNameInput = this.handleNameInput.bind(this)
  }

  handleNameInput(e) {
    e.preventDefault()
    this.setState({
      name: e.target.value
    })
  }

  onSubmitQuery(e) {
    e.preventDefault()
    this.setState({
      hasName: true
    })
  }

  

  render() {
    return (
      <div>
      <Fight />
      {
        this.state.hasName?
        <p className="characterName"> {this.state.name} </p>:
        <Creation onSubmitQuery={this.onSubmitQuery} handleNameInput={this.handleNameInput}/>
      }
      </div>
    )
  }

}
export default FightContainer
