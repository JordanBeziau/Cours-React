import React from 'react';

class Formulaire extends React.Component {

  sendMessage = event => {
    event.preventDefault();
    console.log(this.message.value);
  };

  render() {
    return (
      <form className="form"
        onSubmit={e => {this.sendMessage(e)}}
      >
        <textarea required maxLength="140"
          ref={input => this.message = input}
        ></textarea>
        <div className="info">140</div>
        <button type="submit">Envoyer</button>
      </form>
    )
  }
}

export default Formulaire;
