import React, { Component } from 'react';
import './App.css';
import logo from './assets/svg/flow_logo.svg';
// Connect pages
import Home from "./pages/home.js"
import Data from "./pages/data.js"
import About from "./pages/about.js"
import Side_Nav from "./nav/SideNav.jsx"
import Top_Bar from "./nav/TopBar.jsx"

// Imports icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import firebase from './firebase.js';

// Adds icons
library.add(faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle);

console.log(logo);

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
    tempRef.on('value', (snapshot) => {
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
      <React.Fragment>
        <BrowserRouter>

         <Side_Nav/>
         <Top_Bar/>
       
          <Switch>
            <Route path = "/" exact component={Home} />
            <Route path = "/data" compoent={Data} />
            <Route path = "/about" compoent={About} />
          </Switch>
          </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;