import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { noteData } from './firebaseConnect';

class App extends Component {


  constructor(props){
    super(props);
    this.state = {
    }
  }

  addData =  (item) => {
    // noteData.push(item);
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
