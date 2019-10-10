import React, { Component } from 'react'
import Room from './Room'
import superagent from 'superagent'
import AddGame from './AddGame'

class LobbyContainer extends Component {
  state = {
    rooms: []
  }

  componentDidMount = () => {
    console.log("hello")
    superagent
        .get('http://localhost:4050/room')
        .then(res => {
          console.log("fetch data test", res.body)
          this.setState({rooms: res.body})
        })

  }

  render () {
    console.log(this.state)
    return (
      <div>
        <h2>Please choose a game</h2>
        <div>
          {this.state.rooms.map(room => {
            return <Room room={room} history={this.props.history} /> })
          }
        </div>
        <AddGame />
      </div>
    )
  }
}

export default LobbyContainer

// clickable => put request 
// 