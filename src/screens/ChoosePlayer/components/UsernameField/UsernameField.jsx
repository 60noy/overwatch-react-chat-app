import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

const textFieldStyle = {
  color: '#fff',
}

const UsernameField = ({ onTextChange }) => (
  <TextField
    hintText="enter your name"
    hintStyle={{ color: '#EEEEEE' }}
    inputStyle={textFieldStyle}
    onChange={onTextChange}
  />
)

UsernameField.propTypes = {
  onTextChange: PropTypes.func.isRequired,
}
export default UsernameField
