import React from 'react'
import Card from 'react-bootstrap/Card'
import { FormatCurrency } from '../Utilities/FormatCurrency'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl}:
    StoreItemProps) {
        const quantity = 0
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
                        <Button className="w-100" style={{background:"gray"}}>
                             Add To Cart
                        </Button>
                    ) : null }
                </div> 
            </Card.Body>
            
        </Card>
    }