import borgPainting from '/Users/nasirjohnson/ArtWebsite/art-react-app/PublicImgs/Borg.jpeg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Card () {

    const [addCart, updateAddToCart] = useState("Add to cart");

    return (
        <div className="card">

            <Link to="/ProductPage">
                <img className="card-image" src={borgPainting} alt="Borg painting" title="Product page"></img>
            </Link>
            <h2 className="card-title">Cyber Jordan </h2>
            <p className="card-text">$40.00USD</p>
            
            <button className="add-to-cart" 
            type="button"
            title="Add to cart"
            onClick={() => updateAddToCart("Added to cart")}
            > {addCart} </button>

        </div>
    );
}

export default Card;