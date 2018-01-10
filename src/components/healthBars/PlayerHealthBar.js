import React from 'react';
import './HealthBar.css'

  const PlayerHealthBar = ({width}) => {
    const PlayerHealthBarWidth = () => {
      return width * 2
    }
    const PlayerHealthBarBox = {
      display: 'inline-flex',
      justifyContent: 'flex-start',
      maxWidth: '200px',
      width: '200px',
      height: '30px',
      border: '2px solid black',
      borderColor: 'black',
      padding: '20px,1000px'
    }
    const PlayerHealthBarStyle = {
      height: '30px',
      width: PlayerHealthBarWidth(),
      background: 'red'
    }
    return (
      <div>
        <div style={PlayerHealthBarBox}>
          <div style={PlayerHealthBarStyle}>
          </div>
        </div>
      </div>
    )
  }

export default PlayerHealthBar
