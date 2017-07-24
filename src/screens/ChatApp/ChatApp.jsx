import React from 'react'
import ChatContainer from './containers/ChatContainer'
import Title from '../../components/Title'
import styles from './styles.css'

const ChatApp = props => (
  <div className={styles.container}>
    <Title name="Chat" />
    <ChatContainer {...props} />
  </div>
)
export default ChatApp
