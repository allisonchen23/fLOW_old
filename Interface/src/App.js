import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      temp: 0,
    };
  }

  //lifecylce function of Components
  //called only once 

  componentDidMount() {
    let db = firebase.database();
    var curTemp=22;
  //   db.ref("temp").on('value', (snapshot) => {
  //     var curTemp = snapshot.val(); 
  // });
// ^problem child
    //   this.setState({
    //     temp: curTemp,
    //   })
    // });
    this.setState({temp: curTemp})

  }

  render() {
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
            Creative Lab: fLOW
        </p>

          <a
            className="github-link"
            href="https://github.com/allisonchen23/fLOW"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our GitHub
        </a>
          <p>From database: temp = {this.state.temp}</p>
        </header>
      </div>
    );
  }
}

export default App;
