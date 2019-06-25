import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    // var p1 = {
    //   ten : "man hinh",
    //   gia: 90
    // }
    // console.log(p1);
    // var p2={...p1};
    // p2.gia=100;
    // console.log(p2);

    // var a1 = [1, 5, 3, 10];
    // var a2 = [...a1];
    // a2[2] = 7;
    // console.log(a1);
    // console.log(a2);


    var b1 = {
      num : [34,25,56],
      status: true
    };
    var b2 = {...b1};
    b2.status = false;

    console.log(b2);

    var b3 = {...b1, num :[...b1.num, 100]};
    //b3.num[3] = 200;
    console.log(b3);



    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello guy
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to see more
        </a>
      </header>
    </div>
    );
  }
}

export default App;