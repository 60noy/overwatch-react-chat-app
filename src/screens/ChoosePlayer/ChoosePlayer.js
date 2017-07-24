/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { withRouter } from 'react-router-dom'
import UsernameField from './components/UsernameField'
import HeroAutocompleteField from './components/HeroAutocompleteField'
import styles from './styles.css'


class ChoosePlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      hero: '',
    }
  }

  onNextButtonClick = () => {
    if (this.state.name && this.state.hero) {
      // router.push('/chat')
      this.props.history.push({ pathname: '/chat', state: { name: this.state.name, hero: this.state.hero } }) // eslint-disable-
    }
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

        </div>
      </div>
    )
  }
}
export default withRouter(ChoosePlayer)
