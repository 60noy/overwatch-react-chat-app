import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
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
        iconElementRight={
          <FlatButton
            label="change hero"
            onTouchTap={this.props.onChangeHero}
          />
        }
        iconElementLeft={
          <IconButton onTouchTap={this.navigateToLoginPage}>
            <NavigationArrowBack />
          </IconButton>}
      />
    )
  }
}

UpperAppBar.propTypes = {
  onChangeHero: PropTypes.func.isRequired,
}
export default withRouter(UpperAppBar)
