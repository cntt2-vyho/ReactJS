import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const a1 = "nho";

class App1 extends Component {
  render() {
    return (
      <div>
        <h3>toi ten la : {a1} </h3>
      </div>
    )
  }
}

//vd ve ham map
const so = [1,2,3,4,5,6];
const so2 = so.map((x) => x*2);
class App2 extends Component {
  render() {
    return (
      <div>
         { so2 }
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App=header">
          <img src={logo} className="App-logo" alt="logo" />
          <App2/>
        </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload. 
          </p>
      </div>
    );
  }
}

export default App;