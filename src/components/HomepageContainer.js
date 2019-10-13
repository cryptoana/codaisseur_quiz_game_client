import React, { Component } from 'react'
import SignupFormContainer from './signup/SignupFormContainer';
import LoginFormContainer from './login/LoginFormContainer';

class HomepageContainer extends Component {
  render () {
    return (
      <div className = "Signup">
        <h1>Welcome to Codaisseur Quiz Game!</h1>
        <h3 className="form"></h3>
        <SignupFormContainer />
        <LoginFormContainer />
      </div>
    )
  }
}

export default HomepageContainer