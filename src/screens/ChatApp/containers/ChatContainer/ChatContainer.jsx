/* eslint-disable no-debugger */

import React, { Component } from 'react'
// import shortid from 'shortid'
// import randomcolor from 'randomcolor'
import Chat from '../../components/Chat'
import database from '../../../../helpers/database'

const messagesRef = database.ref().child('messages')
const connectedRef = database.ref('.info/connected')
const usersRef = database.ref().child('users')

export default class ChatContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [
        { user: {
          name: 'Genju',
          hero: 'GENJI',
          // img: `${process.env.PUBLIC_URL}/images/GENJI.jpg`,
        },
          text: 'Using the kayo kure',
        },
        { user: {
          name: 'Tracer',
          hero: 'TRACER',
          // img: `${process.env.PUBLIC_URL}/images/TRACER.jpg`,

        },
          text: 'Lets try again',
        },
      ],
      users: [{
        name: 'Tracer',
        hero: 'TRACER',
        // img: `${process.env.PUBLIC_URL}/images/TRACER.jpg`,

      }, {
        name: 'Genju',
        hero: 'GENJI',
        // img: `${process.env.PUBLIC_URL}/images/GENJI.jpg`,
      }],
      user: {
        name: this.props.location.state.name, // eslint-disable-line react/prop-types
        hero: this.props.location.state.hero, // eslint-disable-line react/prop-types
        // img: `${process.env.PUBLIC_URL}/images/GENJI.jpg`,
      },
      userRef: '',

    }
  }
  componentDidMount() {
    // socket.on('connection', (connection) => {
    // console.log('connection');

    // this.addMessageToState()
    // const userID = this.state.user.id
    messagesRef.on('child_added', (newMessage) => {
      const message = newMessage.val()
      this.addMessageToState(message)
    })

    connectedRef.on('value', (snap) => {
      if (snap.val()) {
        console.log('connected')
        const newUserRef = usersRef.push()
        newUserRef.set({
          ...this.state.user,
        })
      } else {
        const { userRef } = this.state
        if (userRef) {
          debugger
          userRef.remove()
        }
      }
    })
      // // if (id !== userID) {
      // console.log(`ID:${userID}`)
      // console.log(`new message on ${JSON.stringify(userID)}`)
      // this.addMessageToState(user, text)
      // }
    // })

    // });
    //
    // socket.on('disconnection', () => {
    //   console.log('disconnection')
    // })
  }
// OK
  addMessageToState = (message) => {
    const { messages } = this.state
    messages.push(message)
    this.setState({ messages })
  }
  // triggers on current user send button press
  handleAddChatMessage = (text) => {
    console.log(`user sent a message : ${text}`)
    const { user } = this.state

    const message = {
      user,
      text,
    }
    const newMessageRef = messagesRef.push()
    newMessageRef.set({
      ...message,
    })
    // socket.emit('new_message', { name, hero, text, id })
    // this.addMessageToState(message)
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
