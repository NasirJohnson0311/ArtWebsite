import React from 'react'
import Card from 'react-bootstrap/Card'
import { FormatCurrency } from '../Utilities/FormatCurrency'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useShoppingCart } from '../Context/ShoppingCartContext'
import "./StoreItem.css"


type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl}:
    StoreItemProps) {
        const { 
             getItemQuantity,
             increaseCartQuantity,
             decreaseCartQuantity,
             removeFromCart,
        } = useShoppingCart()

        const quantity = getItemQuantity(id)

        return <Card className="store-item-card h-100 w-100">
            <Link to="/ProductPage">
                <div className="image-container">
                    <Card.Img
                        variant="top"
                        src={imgUrl}
                        style={{ objectFit: "cover", width: "100%", height: "400px" }}
                        alt="Product"
                    />
                <div className="img-overlay"></div>
            </div>
            </Link>


            <Card.Body 
                className="d-flex flex-column"
                style={{ width: "100%" }}> 

            <Card.Title className="text-left mb-5">
                <div className="fs-4 fw-bold text-dark">{name}</div>
                <div className="text-muted">{FormatCurrency(price)}</div>
            </Card.Title>

                <div className="mt-auto">
                    {quantity == 0 ? (
                        <Button className="w-100" onClick={() => increaseCartQuantity(id)} style={{background:"gray"}}>
                             Add To Cart
                        </Button>
                    ) : (
                        <div
                            className="d-flex align-items-center flex-column"
                            style={{ gap: ".5rem"}}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{ gap: ".5rem"}}
                            >
                                <Button size="lg" style={{
                                    background:"white", 
                                    color:"black", 
                                    border:"solid .5px"}} 
                                    onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <div>
                                    <span className="fs-5">{quantity}</span> in cart
                                </div>
                                <Button size="lg" style={{
                                    background:"white",
                                    color:"black",
                                    border:"solid 1px"
                                }}
                                onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button className="w-100"
                                style={{
                                    background:"white",
                                    color:"black",
                                    border:"solid 1px black"
                                }}
                                onClick={() => removeFromCart(id)}
                                variant="danger"
                                size="sm"
                    
                                >
                                    Remove
                                </Button>

                        </div>
                    ) } 
                </div> 
            </Card.Body>

        </Card>
    }