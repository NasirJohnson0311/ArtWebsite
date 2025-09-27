import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import DelicateTorusKnot from './DelicateTorusKnot';
import React, { useState } from 'react';
import ZoomedParticleAnimation from './ZoomedParticleAnimation';
import './CheckoutPage.css'


function CheckoutPage () {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        nameOnCard: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

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
                        <span className="checkout-main">Checkout</span>
                                </h1>
                                </div>

                                <div className="payment-info">
                                    <form onSubmit={handleSubmit} className="payment-form">
                                        <div className="form-section">
                                            <h3 className="section-title">Contact Information</h3>
                                            <div className="form-group">
                                                <div className="form-input-wrapper">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email address"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="form-input buy-now-style"
                                                        required
                                                    />
                                                    <div className="input-shine"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-section">
                                            <h3 className="section-title">Shipping Address</h3>
                                            <div className="form-row">
                                                <div className="form-group half-width">
                                                    <div className="form-input-wrapper">
                                                        <input
                                                            type="text"
                                                            name="firstName"
                                                            placeholder="First name"
                                                            value={formData.firstName}
                                                            onChange={handleInputChange}
                                                            className="form-input buy-now-style"
                                                            required
                                                        />
                                                        <div className="input-shine"></div>
                                                    </div>
                                                </div>
                                                <div className="form-group half-width">
                                                    <div className="form-input-wrapper">
                                                        <input
                                                            type="text"
                                                            name="lastName"
                                                            placeholder="Last name"
                                                            value={formData.lastName}
                                                            onChange={handleInputChange}
                                                            className="form-input buy-now-style"
                                                            required
                                                        />
                                                        <div className="input-shine"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-input-wrapper">
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        placeholder="Street address"
                                                        value={formData.address}
                                                        onChange={handleInputChange}
                                                        className="form-input buy-now-style"
                                                        required
                                                    />
                                                    <div className="input-shine"></div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group third-width">
                                                    <div className="form-input-wrapper">
                                                        <input
                                                            type="text"
                                                            name="city"
                                                            placeholder="City"
                                                            value={formData.city}
                                                            onChange={handleInputChange}
                                                            className="form-input buy-now-style"
                                                            required
                                                        />
                                                        <div className="input-shine"></div>
                                                    </div>
                                                </div>
                                                <div className="form-group third-width">
                                                    <div className="form-input-wrapper">
                                                        <input
                                                            type="text"
                                                            name="state"
                                                            placeholder="State"
                                                            value={formData.state}
                                                            onChange={handleInputChange}
                                                            className="form-input buy-now-style"
                                                            required
                                                        />
                                                        <div className="input-shine"></div>
                                                    </div>
                                                </div>
                                                <div className="form-group third-width">
                                                    <div className="form-input-wrapper">
                                                        <input
                                                            type="text"
                                                            name="zipCode"
                                                            placeholder="ZIP code"
                                                            value={formData.zipCode}
                                                            onChange={handleInputChange}
                                                            className="form-input buy-now-style"
                                                            required
                                                        />
                                                        <div className="input-shine"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-section">
                                            <h3 className="section-title">Payment Details</h3>
                                            <div className="form-group">
                                                <div className="form-input-wrapper">
                                                    <input
                                                        type="text"
                                                        name="cardNumber"
                                                        placeholder="Card number"
                                                        value={formData.cardNumber}
                                                        onChange={handleInputChange}
                                                        className="form-input buy-now-style"
                                                        maxLength="16"
                                                        required
                                                    />
                                                    <div className="input-shine"></div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group half-width">
                                                    <div className="form-input-wrapper">
                                                        <input
                                                            type="text"
                                                            name="expiryDate"
                                                            placeholder="MM/YY"
                                                            value={formData.expiryDate}
                                                            onChange={handleInputChange}
                                                            className="form-input buy-now-style"
                                                            maxLength="5"
                                                            required
                                                        />
                                                        <div className="input-shine"></div>
                                                    </div>
                                                </div>
                                                <div className="form-group half-width">
                                                    <div className="form-input-wrapper">
                                                        <input
                                                            type="text"
                                                            name="cvv"
                                                            placeholder="CVV"
                                                            value={formData.cvv}
                                                            onChange={handleInputChange}
                                                            className="form-input buy-now-style"
                                                            maxLength="4"
                                                            required
                                                        />
                                                        <div className="input-shine"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-input-wrapper">
                                                    <input
                                                        type="text"
                                                        name="nameOnCard"
                                                        placeholder="Name on card"
                                                        value={formData.nameOnCard}
                                                        onChange={handleInputChange}
                                                        className="form-input buy-now-style"
                                                        required
                                                    />
                                                    <div className="input-shine"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className="action-buttons">
                                    <button type="submit" className="add-to-cart-btn" onClick={handleSubmit}>
                                        <span>Complete Order</span>
                                        <div className="btn-glow"></div>
                                    </button>
                                    <button className="buy-now-btn">
                                        <span>Pay with ShopPay</span>
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
        </>
    );
}
export default CheckoutPage;