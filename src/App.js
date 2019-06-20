import React, {Component} from 'react';
import './App.css';
import NoiDung from './NoiDung.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThai: "khoitao",
      trangThai2:"vy cute",
    }
  }
  componentWillMount() {
    console.log('componentWillMount chay roi ') 
  }
  componentDidMount() {
    console.log('componentDidMount da chay roi '); 
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate chay roi '); 
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillMount chay roi ') ;
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate chay roi ') ;
  }
  
  
  capNhatState = () => {
    this.setState({
      trangThai:"CapNhat1",
      trangThai2:"CapNhat2"
    });
  }

render() {
  console.log(this.state.trangThai);
  return (
    <div className="App">
      <NoiDung ten={this.state.trangThai2}></NoiDung>
      <button onClick={() => this.capNhatState() }> Click de update state</button>
    </div>
  );
}
}

export default App;
