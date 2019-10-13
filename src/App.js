import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import HomepageContainer from './components/HomepageContainer';
import LobbyContainer from './components/lobby/LobbyContainer';
import SignupFormContainer from './components/signup/SignupFormContainer'
import LoginFormContainer from './components/login/LoginFormContainer'
import RoomContainer from './components/room/RoomContainer'
import './App.css';

class App extends Component {
  render () {
    return (
        <BrowserRouter>
          <main>
              <React.Fragment>
                {(this.props.player.jwt) ? // if user is logged in, display LobbyContainer, otherwise go to HomepageContainer
                  <React.Fragment>
                    <Route exact path="/" component={LobbyContainer} />
                    <Route path path="/room/:id" component={RoomContainer} />
                  </React.Fragment>
                :
                  <Route exact path="/" component={HomepageContainer} />
                }
              </React.Fragment>
          </main>
        </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.player
  }
}
      

export default connect(mapStateToProps)(App)