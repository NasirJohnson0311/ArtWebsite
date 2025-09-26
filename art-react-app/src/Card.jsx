import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import skyfall from './assets/Skyfall.jpg';
import './Card.css';
import borg from './assets/Borg.jpeg';

function Card() {
    const [quantity, setQuantity] = useState(0);

    const addToCart = () => {
        setQuantity(prev => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(prev => prev - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const removeFromCart = () => {
        setQuantity(0);
    };

    return (
        <div className="card">
            <Link to="/ProductPage">
                <div className="image-container">
                    <img className="card-image" src={borg} alt="Skyfall painting" />
                    <div className="img-overlay"></div>
                </div>
            </Link>
            
            <div className="card-body">
                <h2 className="card-title">Cyber Jordan</h2>
                <p className="card-text">$100.00 USD</p>
                
                <div className="card-actions">
                    {quantity === 0 ? (
                        <button className="add-to-cart" onClick={addToCart}>
                            Add to Cart
                        </button>
                    ) : (
                        <div className="quantity-controls1">
                            <div className="quantity-row1">
                                <button className="quantity-btn decrease1" onClick={decreaseQuantity}>
                                    -
                                </button>
                                <span className="quantity-display1">
                                    {quantity} in cart
                                </span>
                                <button className="quantity-btn increase1" onClick={increaseQuantity}>
                                    +
                                </button>
                            </div>
                            <button className="remove-btn1" onClick={removeFromCart}>
                                Remove
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;