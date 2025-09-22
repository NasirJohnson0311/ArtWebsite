import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';
import ZoomedParticleAnimation from './ZoomedParticleAnimation';

function Home () {
    return (
        <>
        <ZoomedParticleAnimation />
        <div style={{ position: 'relative', zIndex: 1}}>
        <br></br>
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
        </div> 
        </>
    );
}

export default Home;