import React, {Component} from 'react';
import logo from './../logo.svg';
import './../css/App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import News from './News';
import Details from './Details';
import Contact from './Contact';
import URLDirectional from '../router/URLDirectional';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Nav />
        <URLDirectional />
        <Footer />
      </div>
      </Router>
      
    );
  }
}

export default App;
