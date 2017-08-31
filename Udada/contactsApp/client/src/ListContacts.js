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
    const { contacts, onRemoveContact } = this.props
    const { query } = this.state

    let displayingContacts
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      displayingContacts = contacts.filter(contact => match.test(contact.name))
    } else {
      displayingContacts = contacts
    }

    displayingContacts.sort(sortBy('name'))

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search contacts"
            value={query}
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
              onClick={() => onRemoveContact(contact)}
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
