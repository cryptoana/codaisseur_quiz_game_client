import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { Redirect } from 'react-router-dom';
import { login } from '../../actions/playerActions'

class LoginFormContainer extends React.Component {
  state = { email: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
        <React.Fragment>
            {this.props.player.jwt && 
                <Redirect to='/' />
            }
            {this.props.player.error &&
                <div className="alert alert-danger" role="alert">
                {this.props.player.error}
              </div>
            }
            <LoginForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state}
            />
        </React.Fragment>
    );
}
}

const mapStateToProps = (state) => {
  return {
      player: state.player
  }
}

export default connect(mapStateToProps, { login })(LoginFormContainer)