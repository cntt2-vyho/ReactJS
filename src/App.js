import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/topmenu/TopMenu';
import Header from './Component/header/Header';
import Content from './Component/content/Content';
import Footer from './Component/footer/Footer';

function App() {
  return (
    <div className="_013">
      <TopMenu/>
      <Header/>
      <div className="content-container">
        <Content title="For about to rock..." anh="img/01.jpg" trichdan="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia."/>
      <Content title="We salute you!" anh="img/02.jpg" trichdan="A simple, one page website template for quickly building one page websites using Bootstrap 4."/>
      <Content title="Let there be rock!" anh="img/03.jpg" trichdan="Subscribe to get updated when new Bootstrap related products arrive!"/>

      <Content title="For about to rock..." anh="img/01.jpg" trichdan="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia."/>
      <Content title="We salute you!" anh="img/02.jpg" trichdan="A simple, one page website template for quickly building one page websites using Bootstrap 4."/>
      <Content title="Let there be rock!" anh="img/03.jpg" trichdan="Subscribe to get updated when new Bootstrap related products arrive!"/>

      <Content title="For about to rock..." anh="img/01.jpg" trichdan="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia."/>
      <Content title="We salute you!" anh="img/02.jpg" trichdan="A simple, one page website template for quickly building one page websites using Bootstrap 4."/>
      <Content title="Let there be rock!" anh="img/03.jpg" trichdan="Subscribe to get updated when new Bootstrap related products arrive!"/>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
