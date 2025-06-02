import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from './Footer';
import { Row, Col } from 'react-bootstrap';
import storeItems from "/Users/nasirjohnson/ArtWebsite/art-react-app/src/Data/items.json";
import { StoreItem } from '../Components/StoreItem';
import Container from 'react-bootstrap/Container';

function Home () {
  return (
    <>
      <p className="featured-items">Featured Items</p>
      <hr />
      <div className="product-cards">
        <Container fluid>

       
        <Row xs={1} sm={2} md={3} lg={4} className="g-4" >
          {storeItems.map(item => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
