import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function NumberOne(props) {
  return (
    <div>
      <div className="col-6">
        <div className="card">
          <img className="card-img-top" scr={props.linkanh} />
          <div className="card-body">
            <h4 className="card-title"> {props.tieude} </h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
    </div>
  )
}

class NumberTwo extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="card">
          <img className="card-img-top" scr={this.props.linkanh} />
          <div className="card-body">
            <h4 className="card-title"> {this.props.tieude} </h4>
            <p className="card-text">Help people interested in this repository understand your project by adding a README.</p>
          </div>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="container">
        <div className="row">
          <NumberOne tieude="San pham 1" linkanh="https://kenh14cdn.com/2019/6/19/hoatran-9781-1560913999285308451313.jpg" />
          <NumberOne tieude="San pham 2" linkanh="https://i.pinimg.com/originals/3c/f6/88/3cf6884def2bb5c878622614a13e3c6d.jpg" />
          <NumberOne tieude="Aquamon" linkanh="https://i.pinimg.com/originals/60/e3/1e/60e31e32c3faf797fdd1953f485731bf.jpg" />
          <NumberTwo tieude="THtruemilk" linkanh="https://ae01.alicdn.com/kf/HTB1CdJzIXXXXXbuXFXXq6xXFXXXB/02-my-neighbor-totoro-cartoon-movie-24-x30-Poster.jpg" />
        </div>
      </div>
    </div>
  );
}

export default App;