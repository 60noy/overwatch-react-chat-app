import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import ChatApp from './screens/ChatApp'
import ChoosePlayer from './screens/ChoosePlayer'


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ChoosePlayer} />
      <Route path="/chat" render={props => <ChatApp {...props} />} />
    </Switch>
  </BrowserRouter>
    )

export default App
