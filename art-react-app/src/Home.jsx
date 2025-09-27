import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';
import ZoomedParticleAnimation from './ZoomedParticleAnimation';
import './Home.css'

function Home () {
    return (
        <>
        <ZoomedParticleAnimation />
        
        <div className="background-effects">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div style={{ position: 'relative', zIndex: 1}}>
        <br></br>
        <div className="featured-section">
          <p className="featured-items">Featured Items</p>
          <hr></hr>
        </div>
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