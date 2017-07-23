import React from 'react'
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  name: {
    marginLeft: '10px',
  },
}
//     <Avatar src={`${process.env.PUBLIC_URL}/images/${hero.toUpperCase()}.jpg`} />
// https://pbs.twimg.com/media/Cblwt4SVAAEAKUV.jpg
// TODO: replace the div with the profile image
// Single user with profile image and his name
const User = ({ name, hero }) => (
  <div style={styles.container}>
    <Avatar src={`${process.env.PUBLIC_URL}/images/${hero.toUpperCase()}.jpg`} />
    <div style={styles.name}>
      {name}
    </div>
  </div>
)

User.propTypes = {
  name: PropTypes.string.isRequired,
  hero: PropTypes.string.isRequired,
}
export default User
