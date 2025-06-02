import React, { useState } from 'react';
import './App.css';
import Navbar from '../Components/Navbar.jsx';
import Footer from './Footer.jsx';
import ProductPage from './ProductPage.jsx';
import CartPage from './CartPage.jsx';
import AccountPage from './AccountPage.jsx';
import Home from './Home.jsx';
import Menu from './Menu.jsx';
import {Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is imported
import { ShoppingCartProivder } from '../Context/ShoppingCartContext';
import { MenuProvider } from '../Context/MenuContext'

function App () {
  return (
    <>
    <MenuProvider>
    <ShoppingCartProivder>
      <Navbar />
      <div className="container-fluid px-0"> {/* Changed to container-fluid and removed padding */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/AccountPage" element={<AccountPage />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </div>
      <Footer />
      </ShoppingCartProivder>
      </MenuProvider>
    </>
  );
}

export default App;