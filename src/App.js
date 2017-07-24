import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import ChatApp from './screens/ChatApp'
import ChoosePlayer from './screens/ChoosePlayer'


class App extends Component {
  componentDidMount() {
    injectTapEventPlugin()
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={ChoosePlayer} />
          <Route exact path="/" render={props => <ChatApp {...props} />} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
