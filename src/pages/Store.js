import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { productsArray } from '../productsStore'
import ProductCard from '../componenets/ProductCard'
function Store() {
  return (
    <>
        <h1 align='center' className='p-3'>Welcome to the Store!</h1>
        <Row xs={1} md={3} className='g-4'>
           {productsArray.map((products,index)=>(
            <Col align='center' key={index}>
                <ProductCard product={products}/>
            </Col>
           
           )

           )}
            
           
        </Row>
    </>
  )
}

export default Store
