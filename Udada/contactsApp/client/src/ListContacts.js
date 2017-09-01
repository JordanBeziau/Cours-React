import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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

  updateQuery = (query) =>  this.setState({ query: query.trim() })

  resetQuery = ()=> this.setState({ query: '' })

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
            onChange={event => this.updateQuery(event.target.value)}
          />
          <Link
            to="/create"
            className="add-contact"
          >Add contact</Link>
        </div>

        {displayingContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>Now showing { displayingContacts.length } of { contacts.length } total</span>
            <button onClick={this.resetQuery}>Show all</button>
          </div>
        )}

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
