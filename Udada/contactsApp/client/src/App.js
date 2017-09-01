import React, { Component } from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'

class App extends Component {
  state = {
    screen: 'create', // list or create
    contacts : [ ]
  }

  componentDidMount() {
    ContactsAPI.getAll().then(contacts => {
      this.setState({ contacts })
    })
  }

  removeContact = contact => {
    this.setState(state => ({
      contacts: state.contacts.filter(c => c.id !== contact.id)
    }))
    ContactsAPI.remove(contact)
  }
  render() {
    return (
      <div>
        { this.state.screen === 'list' && (
          <ListContacts
            onRemoveContact={this.removeContact}
            contacts={this.state.contacts}
          />
        ) }
        { this.state.screen === 'create' && (
          <CreateContact />
        ) }
      </div>
    )
  }
}

export default App
