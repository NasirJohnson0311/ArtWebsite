import React from 'react';
import Navbar from '../Components/Navbar';

import Footer from './Footer';
import { Row, Col } from 'react-bootstrap'
import storeItems from "/Users/nasirjohnson/ArtWebsite/art-react-app/src/Data/items.json";
import { StoreItem } from '../Components/StoreItem';

function Home () {
    return (
<>
        <p className="featured-items">Featured Item</p>
        <hr></hr>
        <div className="product-cards">
        <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
        </Row>
        </div>  
        </>

    );
} 

export default Home;