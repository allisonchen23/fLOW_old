import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="fLow">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <header className="App-header">
        <p>
          Creative Labs: fLow
        </p>

        <a
          className="github-link"
          href="https://github.com/allisonchen23/fLOW"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
