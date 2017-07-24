import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import database from '../../../../helpers/database'
import Chat from './components/Chat'

const messagesRef = database.ref().child('messages')

class ChatMessagesSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      userRef: '',
      user: {
        hero: this.props.hero,
        name: this.props.name,
      },
    }
  }

  componentWillMount() {
    messagesRef.on('child_added', (newMessage) => {
      const message = newMessage.val()
      this.addMessageToState(message)
    })
  }

    // listen to added messages and add them to state
  // add message to the messages in the state
  addMessageToState = (message) => {
    const { messages } = this.state
    messages.push(message)
    this.setState({ messages })
  }
  // send the current user's new message to the server
  handleAddChatMessage = (text) => {
    const { user } = this.state
    const message = {
      user,
      text,
      date: moment().format(),
    }
    // send the new message to server
    const newMessageRef = messagesRef.push()
    newMessageRef.set({
      ...message,
    })
  }

  render() {
    const { messages, users } = this.state
    return (
      <Chat
        onSendMessage={this.handleAddChatMessage}
        messages={messages}
        users={users}
      />
    )
  }
}

ChatMessagesSection.propTypes = {
  hero: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
export default ChatMessagesSection
