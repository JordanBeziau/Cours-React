import React from 'react';
import { render } from 'react-dom';
// CSS
import './style/css/bootstrap.min.css';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col-xs-6">
            <textarea rows="35" className="form-control"></textarea>
          </div>

          <div className="col-xs-6">
            <h1>Résultat :</h1>
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
