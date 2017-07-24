import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import PropTypes from 'prop-types'
import { heroesNames } from '../../utils/heroes'

const heroes = heroesNames.map(hero => hero[0] + hero.substring(1, hero.length).toLowerCase())

const textFieldStyle = {
  color: '#fff',
}

const HeroAutocompleteField = ({ onHeroChoose }) => (
  <AutoComplete
    hintText="Type your hero"
    dataSource={heroes}
    onNewRequest={onHeroChoose}
    filter={AutoComplete.caseInsensitiveFilter}
    style={{ marginRight: 5 }}
    inputStyle={textFieldStyle}
    hintStyle={textFieldStyle}
  />
    )

HeroAutocompleteField.propTypes = {
  onHeroChoose: PropTypes.func.isRequired,
}

export default HeroAutocompleteField
