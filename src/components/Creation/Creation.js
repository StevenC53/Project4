import React, { Component } from 'react';

class Creation extends Component {

  render(){
    return (
      <div>
        <form onSubmit={this.props.onSubmitQuery}>
          <input type='text' placeholder='Enter a name' onChange={this.props.handleNameInput} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}
export default Creation
