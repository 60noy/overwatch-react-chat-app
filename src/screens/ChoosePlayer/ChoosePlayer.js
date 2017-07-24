/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ChoosePlayerBox from '../../containers/ChoosePlayerBox'
import styles from './styles.css'

class ChoosePlayer extends Component {
  // navigates to chat page
  navigateToNextPage = (name, hero) => {
    this.props.history.push({ pathname: '/chat', state: { name, hero } }) // eslint-disable-
  }
  render() {
    return (
      <div className={styles.container} >
        <ChoosePlayerBox
          onNextButtonClick={(name, hero) => this.navigateToNextPage(name, hero)}
          buttonLabel="next"
        />
      </div>
    )
  }
}
export default withRouter(ChoosePlayer)
