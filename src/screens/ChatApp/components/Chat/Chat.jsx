import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import SendMessageSection from '../SendMessageSection'
import UserMessagesList from '../UserMessagesList'

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: '10%',
    marginRight: '10%',
    height: '100%',
  },
}

const Chat = ({ onSendMessage, messages }) => (
  <div style={styles.container}>
    <Paper zDepth={3}>
      <div style={styles.messagesAndUsersList} >
        <div style={styles.messages}>
          <UserMessagesList messages={messages} />
        </div>
        <div style={styles.usersList} />
      </div>
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
