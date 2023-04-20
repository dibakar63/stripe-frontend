import React, { useContext, useState } from 'react'
import {Button,Container,Modal, Navbar} from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { CartProduct } from './CartProduct';
import { BiRupee } from 'react-icons/bi';

function NavbarComponent() {
 
 const cart=useContext(CartContext)
  const [show,setShow]=useState(false)
  const handleClose=()=>{
    setShow(false)
  }
  const handleShow=()=>{
    setShow(true)
  }
  const checkout = async () => {
    await fetch('https://stripe-ihta.onrender.com/checkout', {//https://stripe-ihta.onrender.com
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({items: cart.items})
    }).then((response) => {
        return response.json();
    }).then((response) => {
        if(response.url) {
            window.location.assign(response.url); // Forwarding user to Stripe
        }
    });
}
  const productsCount=cart.items.reduce((sum,product)=>sum+ product.quantity,0);
  return (
    <>
    <Navbar expands='sm'>
      <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse className='justify-content-end'>
        <Button onClick={handleShow}>Cart ({productsCount} items) </Button>
      </Navbar.Collapse>
      
    </Navbar>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {productsCount > 0 ?
      <>
        <p>Items in your cart:</p>
        {cart.items.map((currentProduct,index)=>(
          
          <CartProduct id={currentProduct.id} quantity={currentProduct.quantity} key={index}>

          </CartProduct>
        ))}
        <h1>Total: <BiRupee/> {cart.getTotalCost().toFixed(2)}</h1>
        <Button variant='success' onClick={checkout}>Purchase items!</Button>
      </>
      : <h1></h1>
      }
        <h1>Click Here To Purchase</h1>
      </Modal.Body>
    </Modal>
    </>
  )
}

export default NavbarComponent
