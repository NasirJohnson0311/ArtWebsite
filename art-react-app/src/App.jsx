import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './Navbar.css';
import Card from './Card.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ProductPage from './ProductPage.jsx';
import CartPage from './CartPage.jsx';
import AccountPage from './AccountPage.jsx';
import Home from './Home.jsx';
import Menu from './Menu.jsx';
import {Route, Routes,  } from 'react-router-dom';


function App () {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
           
          <Route path="/" element={<Home />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/AccountPage" element={<AccountPage />} />
          <Route path="/Menu" element={<Menu />} />
            
        </Routes>
        <Footer />
        </div>
    </>
  );
}


export default App
