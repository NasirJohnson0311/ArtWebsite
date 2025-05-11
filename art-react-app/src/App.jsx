import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Card from './Card.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function App () {
  return (
    <>
      <Navbar />
      <p className="featured-items">Featured Items</p>
      <hr></hr>
      <div className="product-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    
      <Footer />
    </>
    
  );
}


export default App
