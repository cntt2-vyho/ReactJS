import React from 'react';
import './../App.css';
import Header from './Header';
import TableData from './TableData';
import SearchForm from './SearchForm';
import Adduser from './Adduser';

function App() {
  return (
    <div>
      <Header/>
      <div className="searchForm">
        <div className="container">
          <div className="row">
            <SearchForm/>
            <TableData/>
            <Adduser/>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
