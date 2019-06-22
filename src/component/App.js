import React, {Component} from 'react';
import './../App.css';
import Header from './Header';
import TableData from './TableData';
import SearchForm from './SearchForm';
import Adduser from './Adduser';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false
    }
  }
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }
  render() {
    return (
      <div>
      <Header/>
      <div className="searchForm">
        <div className="container">
          <div className="row">
            <SearchForm ketNoi = {() => this.doiTrangThai()} hienThiForm={this.state.hienThiForm} />
            <TableData/>
            <Adduser hienThiForm = {this.state.hienThiForm} />

          </div>

        </div>

      </div>
    </div>
    );
  }
}

export default App;