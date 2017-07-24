import React from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import ChatContainer from './containers/ChatContainer'
import Title from '../../components/Title'

const ChatApp = props => (
  <div>
    <AppBar
      title="Overwatch Chat"
      iconElementRight={<FlatButton label="change hero" />}
      iconElementLeft={<IconButton><NavigationArrowBack /></IconButton>}
    />

    <Title name="Chat" />
    <ChatContainer {...props} />
  </div>
)
export default ChatApp
