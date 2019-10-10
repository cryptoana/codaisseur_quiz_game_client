import React, { Component } from "react";
import * as request from "superagent";
// import { url } from "../constants";
import { connect } from "react-redux";

class AddGame extends Component {
  state = {
    name: "Type here....."
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
      .catch(error => console.log("got an error", error));
  };

  render() {
    console.log("chatroomform", this.props);

    // if (!this.props.login.jwt) return "please login";

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            name="newMessage"
            type="text"
            onChange={this.onChange}
            value={this.state.name}
          ></input>
          <button type="submit">Send!</button>
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
  null
)(AddGame);