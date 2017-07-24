/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { withRouter } from 'react-router-dom'

import { heroesNames } from '../../utils/heroes'
import styles from './styles.css'

const heroes = heroesNames.map(hero => hero[0] + hero.substring(1, hero.length).toLowerCase())


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
  render() {
    return (
      <div className={styles.container}>
        <AutoComplete
          hintText="Type your hero"
          dataSource={heroes}
          onNewRequest={this.handleHeroInputUpdate}
          filter={AutoComplete.caseInsensitiveFilter}
        />
        <TextField
          hintText="enter your name"
          onChange={e => this.setState({ name: e.target.value })}
        />
        <RaisedButton
          label="next"
          primary
          onClick={this.onNextButtonClick}
          disabled={!this.state.name || !this.state.hero}
        />
      </div>
    )
  }
}
export default withRouter(ChoosePlayer)
