import React, { useState } from 'react';
import ZoomedParticleAnimation from './ZoomedParticleAnimation';
import skyfall from './assets/Skyfall.jpg';
import borg from './assets/Borg.jpeg';
import Navbar from './Navbar';
import './ProductPage.css';
import { Link } from 'react-router-dom';

function ProductPage() {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prev => prev > 1 ? prev - 1 : 1);
    };

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value >= 1) {
            setQuantity(value);
        }
    };

    return (
        <>
            <ZoomedParticleAnimation />

            <div className="product-page">
                <div className="background-effects">
                    <div className="gradient-orb orb-1"></div>
                    <div className="gradient-orb orb-2"></div>
                    <div className="gradient-orb orb-3"></div>
                </div>

                <div className="product-content-wrapper">
                    {/* Back Arrow */}
                    <div className="back-arrow">
                        <Link to="/" className="back-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                            <span className="back-text">Back</span>
                        </Link>
                    </div>

                    {/* Main Product Section */}
                    <div className="product-container">
                        <div className="product-image-section">
                            <div className="image-wrapper">
                                <img className="product-image" src={borg} alt="Skyfall" />
                                <div className="image-overlay"></div>
                            </div>
                        </div>

                        <div className="product-details-section">
                            <div className="product-card">
                                <div className="product-header">
                                    <h1 className="product-title">
                                        <span className="title-main">Cyber</span>
                                        <span className="title-accent">Jordan</span>
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

                                <div className="quantity-section">
                                    <label className="quantity-label">Quantity</label>
                                    <div className="quantity-controls">
                                        <button 
                                            className="quantity-btn decrease" 
                                            onClick={decreaseQuantity}
                                            disabled={quantity <= 1}
                                        >
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M2 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                            </svg>
                                        </button>
                                        <input 
                                            type="number" 
                                            className="quantity-input" 
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                            min="1"
                                        />
                                        <button 
                                            className="quantity-btn increase" 
                                            onClick={increaseQuantity}
                                        >
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M6 2V10M2 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="action-buttons">
                                    <button className="add-to-cart-btn">
                                        <span>Add to cart</span>
                                        <div className="btn-glow"></div>
                                    </button>
                                        <button className="buy-now-btn">
                                            <span>Buy with ShopPay</span>
                                            <div className="btn-shine"></div>
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
                    </div>

                    {/* Related Items Section */}
                    <div className="related-section">
                        <div className="section-header">
                            <h2 className="related-title">Related Items</h2>
                            <div className="section-line"></div>
                        </div>
                        
                        <div className="related-items">
                            <div className="related-item">
                                <div className="related-card">
                                    <img className="related-image" src={skyfall} alt="Related item 1" />
                                    <div className="related-overlay">
                                        <button className="quick-view">View</button>
                                    </div>
                                </div>
                            </div>
                            <div className="related-item">
                                <div className="related-card">
                                    <img className="related-image" src={skyfall} alt="Related item 2" />
                                    <div className="related-overlay">
                                        <button className="quick-view">View</button>
                                    </div>
                                </div>
                            </div>
                            <div className="related-item">
                                <div className="related-card">
                                    <img className="related-image" src={skyfall} alt="Related item 3" />
                                    <div className="related-overlay">
                                        <button className="quick-view">View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPage;