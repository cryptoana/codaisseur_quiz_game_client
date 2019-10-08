import React, { Component } from 'react'
import Scoreboard from './Scoreboard'
import Quiz from './Quiz'
import CheckAnswer from './CheckAnswer'

class GameContainer extends Component {
  render () {
    return (
      <div>
        <Scoreboard />
        <h1>React Quiz></h1>
        <Quiz />
        <CheckAnswer />
      </div>
    )
  }
}

export default GameContainer