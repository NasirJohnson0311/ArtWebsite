import React from 'react';
import borgPainting from './assets/Borg.jpeg';
import './ProductPage.css';
import { Link } from 'react-router-dom';


function ProductPage () {
    return (
        <body className="page">

            <div className="back-arrow">
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                </Link>
            </div>

            <ul className="product-list">
                <li>
                    <img className="card-image" src={borgPainting} alt="Borg painting" ></img>
                </li>
                <li>
                    <div className="description">
                        <h2>Cyber Jordan</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br></br> <br></br>aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Add to cart</p>
                        <button></button>
                        <p>Quantity</p>
                    </div>
                </li>
            </ul>

            <br></br>
            <h2 className="related-items">Related items</h2>
            <hr></hr>
            <ul className="related-list">
                <li className="related-item1">
                    <img className="card-image" src={borgPainting} alt="Borg painting" ></img>
                </li>
                <li className="related-items">
                    <img className="card-image" src={borgPainting} alt="Borg painting" ></img>
                </li>
                <li className="related-item3">
                    <img className="card-image" src={borgPainting} alt="Borg painting" ></img>
                </li>

            </ul>
        </body>
    );
}

export default ProductPage;