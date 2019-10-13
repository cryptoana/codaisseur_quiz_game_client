import React, { Component } from 'react'
import superagent from 'superagent'
import GameContainer from '../game/GameContainer'
import { connect } from 'react-redux'


class Room extends Component {

  onClick = (roomId) => {
    console.log("onClick on room ", this.props.player.jwt )
    const jwt = this.props.player.jwt 
    superagent
        .put(`http://localhost:4050/room/${roomId}`)
        .set('Authorization', `Bearer ${jwt}`)
        //.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF5ZXJJZCI6MSwiaWF0IjoxNTcwNjM0MzcyLCJleHAiOjE1NzA2NDE1NzJ9.tYlu70yT6m4Mg7BHp3Ml3HhPiAeBubX3iwhrzm8ZZjo`)
        .then(res => {
          console.log("fetch put to room", res.body)
          // this.setState({rooms: res.body})
        })
        this.props.history.push(`/room/${roomId}`);
  }

  render () {
    console.log("hi from react room", this.props)
    console.log('ROOM DATA', this.props.room)
    if(!this.props.room) return ""
    return (
      // use arrow as a callback for onClick to pass data to the real function I want to execute on click
      // otherwise it executes the function immediately, on page load, before click
      <div onClick={() => this.onClick(this.props.room.id)}> 
          <h2>{this.props.room.name}</h2>
          {/* <h2>{this.props.room.status}</h2> */}
      </div>
    )
  }
}
function mapStateToProps (reduxState) {
  console.log("mstp room",reduxState)
  return({
    player: reduxState.player
  })

}


export default connect(mapStateToProps,{}) (Room)