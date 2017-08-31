import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListContacts extends Component {

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemoveContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateStateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render() {
    let displayingContacts

    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      displayingContacts = this.props.contacts.filter(contact => match.test(contact.name))
    } else {
      displayingContacts = this.props.contacts
    }

    displayingContacts.sort(sortBy('name'))

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search contacts"
            value={this.state.query}
            onChange={event => this.updateStateQuery(event.target.value)}
          />
        </div>
        <ol className="contact-list">
          {displayingContacts.map(contact => (
            <li key={contact.id} className="contact-list-item">
              <div className="contact-avatar" style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}>
            </div>
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>
            <button
              onClick={() => this.props.onRemoveContact(contact)}
              className="contact-remove"
              >Remove</button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}


export default ListContacts
