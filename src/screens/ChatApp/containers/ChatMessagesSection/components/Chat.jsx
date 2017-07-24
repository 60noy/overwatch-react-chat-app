import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import SendMessageSection from '../../../components/SendMessageSection'
import UserMessagesList from '../../../components/UserMessagesList'

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
    height: '100%',
  },

}

const Chat = ({ onSendMessage, messages }) => (
  <div style={styles.container}>
    <Paper zDepth={3}>
      <UserMessagesList messages={messages} />
      <SendMessageSection onSendMessage={onSendMessage} />
    </Paper>
  </div>
)

Chat.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      hero: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
}
export default Chat
