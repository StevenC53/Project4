import React from 'react';

  const BotHealthBar = ({width}) => {
    const BotHealthBarWidth = () => {
      return width * 2
    }
    const BotHealthBarBox = {
      display: 'inline-flex',
      justifyContent: 'flex-start',
      maxWidth: '200px',
      width: '200px',
      height: '30px',
      border: '2px solid black',
      borderColor: 'black',
      padding: '20px,1000px'
    }
    const BotHealthBarStyle = {
      height: '26px',
      width: BotHealthBarWidth(),
      background: 'red'
    }
    return (
      <div>
        <div style={BotHealthBarBox}>
          <div style={BotHealthBarStyle}>
          </div>
        </div>
      </div>
    )
  }

export default BotHealthBar
