import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import HomepageContainer from './components/HomepageContainer';


class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <HomepageContainer />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App