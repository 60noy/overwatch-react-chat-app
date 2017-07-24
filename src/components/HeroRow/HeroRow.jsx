import React from 'react'
import PropTypes from 'prop-types'
import User from '../../../ChatApp/components/User'

const HeroRow = ({ hero }) => (
  <User
    name={hero}
    hero={hero}
  />
)

HeroRow.propTypes = {
  hero: PropTypes.string.isRequired,
}
export default HeroRow
