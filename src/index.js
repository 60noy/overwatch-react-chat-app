import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import customTheme from './utils/theme'
import App from './App'

import './index.css'

injectTapEventPlugin()

ReactDOM.render(
  <MuiThemeProvider muiTheme={customTheme}>
    <App />
  </MuiThemeProvider>, document.getElementById('root'))
