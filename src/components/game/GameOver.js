import React, { Component } from 'react'

class GameOver extends Component {
  render () {
    return (
      <div>
        <h2>Final score is:</h2>
        <Scoreboard />
        <h1>Player1 {name} won! </h1>
        <h1>Player2 {name} has to start the class again!</h1>
      </div>
    )
  }
}

export default GameOver