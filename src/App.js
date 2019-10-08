import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import HomepageContainer from './components/HomepageContainer';


class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <HomepageContainer />
      </Provider>
    )
  }
}

export default App