import React from 'react';
import { render } from 'react-dom';
// CSS
import './style/css/bootstrap.min.css';
import './index.css';
// JS
import { sampleText } from './sampleText';
// Marked.js
import marked from 'marked';

class App extends React.Component {

  state = {
    text: sampleText
  };

  componentWillMount() {
    const localStorageText = localStorage.getItem('text');
    localStorageText ? this.setState({ text: localStorageText }) : null;
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('text', nextState.text);
  }

  changeText = (event) => {
    const text = event.target.value;
    this.setState({ text });
  };

  markedText = (text) => {
    const markedText = marked(text, {sanitize: true});
    return { __html: markedText};
  }

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
            <div dangerouslySetInnerHTML={this.markedText(this.state.text)} />
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
