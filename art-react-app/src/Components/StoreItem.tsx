import React from 'react'
import Card from 'react-bootstrap/Card'
import { FormatCurrency } from '../Utilities/FormatCurrency'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useShoppingCart } from '../Context/ShoppingCartContext'


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

        return <Card className="w-auto h-auto">
            <Link to="/ProductPage" >
                <Card.Img 
                    variant="top"
                    src={imgUrl}
                    height="auto" 
                    style={{ objectFit: "cover", width: "25rem"}} //
                    alt="Borg"
                    />  
            </Link>

            <Card.Body className="d-flex flex-column" style={{ width: "25rem"}}> 
                <Card.Title className="d-flex
                justify-content-space-between align-items-baseline
                mb-4">
                    <span className="fs-2 text-muted">{name}</span>
                    <span className="ms-2 text-muted">{ FormatCurrency(price)} </span>
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