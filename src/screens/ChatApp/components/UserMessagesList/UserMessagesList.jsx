import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import UserMessage from '../UserMessage'

// messages list components which gets array of messages containing text and user

class UserMessagesList extends Component {
  componentDidUpdate() {
    this.scrollToBottom()
  }
  scrollToBottom() {
    const scrollHeight = this.messageList.scrollHeight
    const height = this.messageList.clientHeight
    const maxScrollTop = scrollHeight - height
    this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0
  }


  render() {
    const { messages } = this.props
    return (
      <div
        style={{ overflowY: 'scroll', height: '400px' }}
        ref={(div) => { this.messageList = div }}
      >
        {messages.map(message =>
        (<UserMessage
          message={message.text}
          user={message.user}
          key={shortid.generate()}
        />),
      )}
      </div>
    )
  }
}


UserMessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      hero: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
}
export default UserMessagesList
