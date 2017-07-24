import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import customTheme from './utils/theme'
import App from './App'

import './index.css'


ReactDOM.render(
  <MuiThemeProvider muiTheme={customTheme}>
    <App />
  </MuiThemeProvider>, document.getElementById('root'))
