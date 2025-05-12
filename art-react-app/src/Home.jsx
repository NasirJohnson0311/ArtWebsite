import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';

function Home () {
    return (
        <>
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
        </>
    );
}

export default Home;