import React from 'react'
import ChatContainer from './containers/ChatContainer'
import Title from '../../components/Title'
import bg from '../../images/bg.jpg'

const ChatApp = props => (
  <div style={{ backgroundImage: `url${bg}`, width: '100%' }}>
    <Title name="Chat" />
    <ChatContainer {...props} />
  </div>
)
export default ChatApp
