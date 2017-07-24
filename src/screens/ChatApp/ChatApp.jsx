import React, { Component } from 'react'
import UpperAppBar from './containers/UppperAppBar'
import Title from '../../components/Title'
import ChatMessagesSection from './containers/ChatMessagesSection'

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  // shows modal with choose hero box
  showChooseHeroModal = () => {

  }
  render() {
    return (
      <div>
        <UpperAppBar onChangeHero={() => this.showChooseHeroModal} />
        <Title name="Chat" />
        <ChatMessagesSection />
      </div>
    )
  }
}

export default Chat
