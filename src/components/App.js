import React from 'react';
import logo from './../logo.svg';
import './../css/App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import News from './News';
import Details from './Details';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <Home/> */}
      {/* <News/> */}
      {/* <Details/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
