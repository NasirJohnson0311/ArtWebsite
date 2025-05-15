import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';
import { Row, Col } from 'react-bootstrap'
import storeItems from "../Data/items.json";
import { StoreItem } from './StoreItem';

function Home () {
    return (
<>
        <p className="featured-items">Featured Item</p>
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