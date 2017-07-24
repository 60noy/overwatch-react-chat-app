import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import UsernameField from '../../components/UsernameField'
import HeroAutocompleteField from '../../components/HeroAutocompleteField'
import styles from './styles.css'

class ChoosePlayerBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      hero: '',
    }
  }

  onNextButtonClick = () => {
    const { name, hero } = this.state
    if (name && hero) {
      // router.push('/chat')
      this.props.onNextButtonClick(name, hero)
    }
  }
  handleHeroInputUpdate = (hero) => {
    this.setState({ hero })
  }
  handleHeroInputUpdate = (hero) => {
    this.setState({ hero })
  }

  handleUsernameTextChange = (val) => {
    this.setState({ name: val })
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title} >Choose your hero</div>
        <HeroAutocompleteField onHeroChoose={hero => this.handleHeroInputUpdate(hero)} />
        <UsernameField onTextChange={(e, val) => this.handleUsernameTextChange(val)} />
        <div>
          <RaisedButton
            label={this.props.buttonLabel}
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
  buttonLabel: PropTypes.string.isRequired,
}
export default ChoosePlayerBox
