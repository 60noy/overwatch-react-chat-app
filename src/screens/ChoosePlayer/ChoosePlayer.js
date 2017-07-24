/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { withRouter } from 'react-router-dom'

import { heroesNames } from '../../utils/heroes'
import styles from './styles.css'

const heroes = heroesNames.map(hero => hero[0] + hero.substring(1, hero.length).toLowerCase())


const textFieldStyle = {
  color: '#fff',
}

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
        <div className={styles.centeredBox}>
          <div className={styles.title} >Choose your hero</div>
          <AutoComplete
            hintText="Type your hero"
            dataSource={heroes}
            onNewRequest={this.handleHeroInputUpdate}
            filter={AutoComplete.caseInsensitiveFilter}
            style={{ marginRight: 5 }}
            textColor="#fff"
            hintColor="#fff"
            inputStyle={textFieldStyle}
            hintStyle={textFieldStyle}
          />
          <TextField
            hintText="enter your name"
            hintStyle={{ color: '#EEEEEE' }}
            inputStyle={textFieldStyle}
            onChange={e => this.setState({ name: e.target.value,
            })}
          />
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
