import React, { Component } from 'react'
import Room from './Room'
import superagent from 'superagent'
import AddGame from './AddGame'
import {addLobbyItems} from '../../actions/game'
import {connect} from 'react-redux'

class LobbyContainer extends Component {
  // state = {
  //   rooms: []
  // }

  componentDidMount = () => {
    console.log("hello")
    superagent
        .get('http://localhost:4050/room')
        .then(res => {
          console.log("fetch data test", res.body)
          // this.setState({rooms: res.body})
          this.props.addLobbyItems(res.body)

        })

  }

  render () {
    console.log(this.props)
    if(!this.props.rooms) return 'waiting for rooms'
    return (
      <div>
        <h1>Please choose a game</h1>
        <div className="room">
          {this.props.rooms.map(room => {
            return <Room room={room} history={this.props.history} /> })
          }
        </div>
        <AddGame />
      </div>
    )
  }
}
function mapStateToProps(state){
  console.log("mstp",state)
  console.log("mstp lobby",state.lobby)
  return ({ rooms: state.lobby})
}

export default connect(mapStateToProps, {addLobbyItems}) (LobbyContainer)

// clickable => put request 
// 