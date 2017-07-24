import React from 'react'
import UpperAppBar from './containers/UppperAppBar'
import ChatMessagesSection from './containers/ChatMessagesSection'
import styles from './styles.css'

const ChatApp = ({ location }) => ( //eslint-disable-line
  <div className={styles.container}>
    <UpperAppBar />
    <ChatMessagesSection {...location.state} />
  </div>
    )

export default ChatApp
