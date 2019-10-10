import React, { Component } from 'react'

class RoomContainer extends Component {
  render() {
    return <div>Welcome in room {this.props.match.params.id}</div>
  }
}

export default RoomContainer