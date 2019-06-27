import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { noteData } from './firebaseConnect';
import { connect } from 'react-redux';

class App extends Component {

  showNoteForm = () => {
    if(this.props.isEdit === true) {
      return <NoteForm/>
    }
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row" style={{marginTop: '20px'}}>
            <NoteList />
            {this.showNoteForm()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
export default connect(mapStateToProps)(App);
