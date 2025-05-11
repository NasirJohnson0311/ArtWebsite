import borgPainting from './assets/Borg.jpeg';
import React, { useState } from 'react';

function Card () {

    const [addCart, updateAddToCart] = useState("Add to cart");

    return (
        <div className="card">

            <a href="#"><img className="card-image" src={borgPainting} alt="Borg painting" ></img></a>
            <h2 className="card-title">Cyber Jordan </h2>
            <p className="card-text">$40.00USD</p>
            
            <button className="add-to-cart" 
            type="button"
            onClick={() => updateAddToCart("Added to cart")}
            > {addCart} </button>

        </div>
    );
}

export default Card;