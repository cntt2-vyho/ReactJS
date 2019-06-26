import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import {firebaseConnect} from './firebaseConnect';

class App extends Component {


  pushData = () => {
    var dataConnect = firebase.database().ref('dataForNote');
    dataConnect.push({
      title:"Ghi chu so 3",
      content: "day la content cua note 3"
    })
    console.log('ban vua them moi du lieu');
  }


  removeData = (id) => {

    var dataConnect = firebase.database().ref('dataForNote');
    dataConnect.child(id).remove();
    console.log('ban da xoa thanh cong phan tu cos if la: ' +id);
  }

  render() {
  console.log(firebaseConnect);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          hello guy
        </h1>
      </header>
      <button onClick={()=> this.pushData()} >Click to add database</button>
      <hr />
      <button onClick={()=> this.removeData('-LiHiPDA_7gs0vKyHLSi')} >Click to remove database</button>
    </div>
  );
  }
}
export default App
