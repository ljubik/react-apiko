import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Router from './scenes/Router';

class App extends React.Component {
  render() {
    return (
      <div className="root">
        <Router />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
