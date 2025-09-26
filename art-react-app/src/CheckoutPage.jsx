import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import DelicateTorusKnot from './DelicateTorusKnot';
import React, { useState } from 'react';
import ZoomedParticleAnimation from './ZoomedParticleAnimation';
import './CheckoutPage.css'


function CheckoutPage () {
    return (
        <>
        <ZoomedParticleAnimation />
        <div className="back-arrow">
            <Link to="/ProductPage" className="back-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                        </svg>
                        <span className="back-text">Back</span>
            </Link>
        </div>

        <div className="checkout-details-section">
            <div className="product-card">
                <div className="checkout-header">
                    <h1 className="checkout-title">
                        <span className="checkout-main">Cyber</span>
                            <span className="chekcout-accent">Jordan</span>
                                </h1>
                                </div>
                                        
                                <div className="product-price">
                                    <span className="price-label">Price</span>
                                        <div className="price-container">
                                            <span className="price">$100.00</span>
                                            <span className="currency">USD</span>
                                        </div>
                                </div>
                                <div className="payment-info">
                                </div>
                                    <div className="action-buttons">
                                        <button className="add-to-cart-btn">
                                            <span>Add to cart</span>
                                            <div className="btn-glow"></div>
                                        </button>
                                            <button className="buy-now-btn">
                                                <Link to="/CheckoutPage">
                                                    <span>Buy with ShopPay</span>
                                                    <div className="btn-shine"></div>
                                                </Link>
                                            </button>
                                        <button className="more-payment-btn">More payment options</button>
                                    </div>
                                    <div className="product-features">
                                        <div className="feature-item">
                                            <div className="feature-icon"></div>
                                            <span>8.25 art decks</span>
                                        </div>
                                        <div className="feature-item">
                                            <div className="feature-icon"></div>
                                            <span>No hanging equipment included</span>
                                        </div>
                                        <div className="feature-item shipping-notice">
                                            <div className="feature-icon"></div>
                                            <span>7-10 Business Days Processing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
            <h1>Checkout Page</h1>
        </>
    );
}
export default CheckoutPage;