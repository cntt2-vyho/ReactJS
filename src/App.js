import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var redux = require('redux');
    var oldSatate = {
      num:["man hinh", "chuot", "ban phim"],
      editStatus: true
  }
    var reducer1 = (state=oldSatate, action) => {
      switch (action.type) {
        case "CHANGE_EDIT_STATUS":
          return {...state, editStatus:!state.editStatus};
          break;

          case "ADD_NEW":
          return {...state, num : [...state.num, action.newItem]};
          break;

          case "DELETE":
          return {...state, num : state.num.filter( (value, i) => i!= action.index)};
          break;
      
        default:
          return state;
          break;
      }
      
    }

    
    var store1 = redux.createStore(reducer1);
    console.log(store1.getState());
    store1.dispatch({type:"CHANGE_EDIT_STATUS"});
    console.log(store1.getState());

    store1.dispatch({type:"ADD_NEW", newItem:"CPU"})
    console.log(store1.getState());

    store1.dispatch({type:"DELETE", index: 1});
    console.log(store1.getState());

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