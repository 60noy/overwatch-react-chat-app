import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'

class UpperAppBar extends Component {
  navigateToLoginPage = () => {
    this.props.history.push('/') // eslint-disable-line react/prop-types
  }
  render() {
    return (
      <AppBar
        title="Overwatch Chat"
        iconElementLeft={
          <IconButton onTouchTap={this.navigateToLoginPage}>
            <NavigationArrowBack />
          </IconButton>}
      />
    )
  }
}


export default withRouter(UpperAppBar)
