import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { noteData } from './firebaseConnect';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

class App extends Component {


  constructor(props){
    super(props);
    this.state = {
    }
  }

  addData =  (item) => {
    noteData.push(item);
  }
  render() {


    
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <NoteList />
            <NoteForm getData ={ (item) => {this.addData(item)}} />
          </div>
        </div>
      </div>
    );
  }
}
export default App
