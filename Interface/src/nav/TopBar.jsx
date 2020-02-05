//Home Page
import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import './nav.css';
import logo from '../assets/svg/flow_logo.svg';

// Imports icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'


// Adds icons
library.add(faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle);

console.log(logo);

class Top_Bar extends Component { 
  render() {
    return (
        <React.Fragment>
          <nav className="top_bar">
            <ul className="">
              <li className="">
                <Link to="/"><FontAwesomeIcon icon="user-circle" className="top_icons"/></Link>
              </li>
            </ul>
          </nav>
        </React.Fragment>
    );
  }
}

export default Top_Bar;