import React, { Component } from 'react'
import SignupFormContainer from './SignupFormContainer';
import LoginFormContainer from './LoginFormContainer';

class HomepageContainer extends Component {
  render () {
    return (
      <div>
        <h1>Welcome to Codaissuer Quiz Game!</h1>
        <h3>Create an account</h3>
        <SignupFormContainer />
        <h3>Login here</h3>
        <LoginFormContainer />
      </div>
    )
  }
}

export default HomepageContainer