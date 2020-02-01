import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import firebase from './firebase.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      temp: "0",
      name: "",
      name2: "",
    };
  }

  //lifecylce function of Components
  //called only once 
  increment_temp = () => {
    var past_temp = this.state.temp;
    this.setState({ temp: past_temp + 1 });
  }
  componentDidMount = () => {
    //var userID = firebase.auth().currentUser.uid;
    firebase.database.enableLogging(true);
    let db = firebase.database();
    var curtemp;
    let tempRef = db.ref('temp'); //
    let imageRef = db.ref('image');
    let nameRef = db.ref('image/name');


// if speed the database was more of a tree like the following:
    // temp:
    //   humidity:
    //   airspeed:
    // access humidity from .ref('temp/humidity')
    // then access value of humidity with speed.humidity
    //these are called listneners, run asynchronously
    tempRef.on('value', snapshot => {
      curtemp = snapshot.val();
      this.setState({ temp: curtemp });
    });
    imageRef.on('value', snapshot => {
      let db_name= snapshot.child('name').val();
      this.setState({name: db_name});
    });
    nameRef.on('value', snapshot => {
      this.setState({name2: snapshot.val()});
    });

  }
  render() {
    return (
      <Router>

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
        <p>From database: {this.state.temp}</p>
        <p>Image/Name: {this.state.name}</p>
        <p>should be same value as above: {this.state.name2}</p>
          </header>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;




function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
