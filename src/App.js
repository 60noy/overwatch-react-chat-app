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
          <Route exact path="/" component={ChoosePlayer} />
          <Route path="/chat" render={props => <ChatApp {...props} />} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
