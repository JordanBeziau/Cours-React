import React from 'react';
import { render } from 'react-dom';
// CSS
import './style/css/bootstrap.min.css';
import './index.css';
// JS
import { sampleText } from './sampleText';

class App extends React.Component {

  state = {
    text: sampleText
  };

  changeText = (event) => {
    const text = event.target.value;
    this.setState({ text });
  };

  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col-xs-6">
            <textarea
              rows="35"
              className="form-control"
              value={this.state.text}
              onChange={(event) => this.changeText(event)}
            ></textarea>
          </div>

          <div className="col-xs-6">
            <h1>Résultat :</h1>
            <p>{this.state.text}</p>
          </div>

        </div>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
);
