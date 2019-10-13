import React, { Component } from "react";
import * as request from "superagent";
// import { url } from "../constants";
import { connect } from "react-redux";
import {addNewRoom} from '../../actions/game'

class AddGame extends Component {
  state = {
    name: ""
  };
  onChange = event => {
    this.setState({ name: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    console.log("form submited");
    request
      .post(`http://localhost:4050/room`)
      .send({ name: this.state.name })
      .then(result => {
        console.log('res', result.body)
        this.props.addNewRoom(result.body)
        
        
      })
      .catch(error => console.log("got an error", error));
  };

  render() {
    console.log("chatroomform", this.props);

    // if (!this.props.login.jwt) return "please login";

    return (
      <div>
        <p class="createRoom">Create a room:</p>
        <form className="createRoom" onSubmit={this.onSubmit}>
          <input
            name="newMessage"
            type="text"
            onChange={this.onChange}
            value={this.state.name}
          ></input>
          <button className="createRoomButton" type="submit">Yes, give a hotel room!</button>
        </form>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return { login: reduxState.login };
}

export default connect(
  mapStateToProps,
  {addNewRoom}
)(AddGame);