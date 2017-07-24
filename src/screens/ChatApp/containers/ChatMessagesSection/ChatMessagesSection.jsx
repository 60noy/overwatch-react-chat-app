/* eslint-disable no-debugger */
import React, { Component } from 'react'
// import randomcolor from 'randomcolor'
import database from '../../../../helpers/database'
import Chat from './components/Chat'

const messagesRef = database.ref().child('messages')

class ChatMessagesSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      user: {
        name: 'noy', // eslint-disable-line react/prop-types
        // name: this.props.location.state.name, // eslint-disable-line react/prop-types
        // hero: this.props.location.state.hero, // eslint-disable-line react/prop-types
        hero: 'GENJI', // eslint-disable-line react/prop-types
      },
      userRef: '',
    }
  }
  componentWillMount() {
    // listen to added messages and add them to state
    messagesRef.on('child_added', (newMessage) => {
      const message = newMessage.val()
      this.addMessageToState(message)
    })
  }
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

export default ChatMessagesSection
