import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export default class ChoosePlayerBox extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={styles.centeredBox}>
        <div className={styles.title} >Choose your hero</div>
        <HeroAutocompleteField onHeroChoose={hero => this.handleHeroInputUpdate(hero)} />
        <UsernameField onTextChange={(e, val) => this.handleUsernameTextChange(val)} />

        <div>
          <RaisedButton
            label="next"
            primary
            onClick={this.onNextButtonClick}
            disabled={!this.state.name || !this.state.hero}
            style={{ marginTop: '5%' }}
          />
        </div>

      </div>)
  }
}
ChoosePlayerBox.propTypes = {
  onNextButtonClick: PropTypes.func.isRequired,
}
