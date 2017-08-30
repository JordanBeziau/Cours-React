import React, { Component } from "react";

class ContactList extends Component {
  render() {
    const people = this.props.contacts;

    return (
      <ol>
        {people.map((person, index) => <li key={index}>{person.name}</li>)}
      </ol>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList
          contacts={[{ name: "Jack" }, { name: "Jason" }, { name: "Olly" }]}
        />
        <ContactList
          contacts={[{ name: "Orson" }, { name: "Roger" }, { name: "Cindy" }]}
        />
      </div>
    );
  }
}

export default App;
