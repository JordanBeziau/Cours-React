import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <div className="message">
        <p className="user-message">
          {this.props.pseudo} : Hello World !
        </p>
      </div>
    )
  }
}

export default Message;
