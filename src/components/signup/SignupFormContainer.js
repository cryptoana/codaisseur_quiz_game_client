import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signup } from '../../actions/playerActions';
import SignupForm from './SignupForm';

class SignupFormContainer extends React.Component {
  state = { name: '', email: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.signup(this.state)
  }

  onChange = (event) => {
    let value = event.target.value;

    // Prevent spaces and whitespace in the username
    if (event.target.name === 'name') {
        value = value.replace(/[^a-zA-Z0-9_.-]/g,'');
    }

    this.setState({
        [event.target.name]: value
    });
}

render() {
  return (
      <React.Fragment>
          {this.props.player.jwt &&
              <Redirect to='/' />
          }
          {!this.props.player.jwt &&
              <React.Fragment>
                  <p>Sign up to play the most awesome game on the planet.</p>
                  {this.props.player.error &&
                      <div className="alert alert-danger" role="alert">
                          {this.props.player.error}
                      </div>
                  }
                  <SignupForm
                      onSubmit={this.onSubmit}
                      onChange={this.onChange}
                      values={this.state}
                  />
              </React.Fragment>
          }
      </React.Fragment>
  );
}
}

const mapStateToProps = (state) => {
  return {
      player: state.player
  }
}

export default connect(mapStateToProps, { signup })(SignupFormContainer)