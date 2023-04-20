import React from 'react'
import './img.css'
import { Card,Button,Form,Row,Col } from 'react-bootstrap'
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import {BiRupee} from 'react-icons/bi';
function ProductCard(props) {
    const product=props.product;
    const cart=useContext(CartContext);
    const productQuantity=cart.getProductQuantity(product.id);
  return (
    <Card>
        <Card.Body>
          <img  src={product.productImage} alt='img'/>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text><BiRupee/>{product.price}</Card.Text>
            {productQuantity > 0 ?
            <>
                <Form as={Row}>
                    <Form.Label column='true' sm='6'>In Cart:{productQuantity}</Form.Label>
                     <Col sm='6'>
                        <Button sm='6' onClick={()=>cart.addOneToCart(product.id)} className='mx-2'>+</Button>
                        <Button sm='6'onClick={()=>cart.removeOneFromCart(product.id)} className='mx-2'>-</Button>
                     </Col>
                </Form>
                <Button variant='danger' onClick={()=>cart.deleteFromCart(product.id)} className='my-2'>Remove from cart</Button>
            </>
            : <Button variant='primary' onClick={()=>cart.addOneToCart(product.id)}>Add to cart</Button>
            }
            
        </Card.Body>
    </Card>
  )
}

export default ProductCard
