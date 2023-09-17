import React from 'react'
import { Button, Col, Container,Image, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Data from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { clearcart, deleteproduct } from '../rtk/slices/cart-slices';
const Cart = () => {
  const cart=useSelector((state)=>state.cart);
  const dispatch=useDispatch();
 //cal price
 const totalPrice=cart.reduce((acc,product)=>{
  acc+=product.price * product.quntity;
  return acc;
 },0)

  return (
    <Container>
      <Row>
        <Col className='col-md-12 mt-5 mb-5'>
        <h3>welcome to your cart </h3>
        <hr />
        </Col>
      </Row>
      <button className='btn btn-outline-primary mb-5 px-3' onClick={()=>dispatch(clearcart())}>clear cart</button>
      <h5 className=' mb-5 px-3' style={{color:'black', fontWeight:"blod" ,fontSize:'24px',textTransform:'capitalize'}}>your total price is:<span style={{color:'gray', fontWeight:"500" ,fontSize:'20px'}}>{totalPrice.toFixed(2)}$</span></h5>
      <Table striped>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>category</th>
          <th>image</th>
          <th>price</th>
          <th>quntity</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
      {cart.map((product)=>{
        return(
          <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td>{product.category}</td>
          <td><Image src={product.image} alt={product.title} style={{width:'100px',height:'100px'}} /></td>
          <td>{product.price}</td>
          <td>{product.quntity}</td>
          <td><Button variant='danger' onClick={()=>dispatch(deleteproduct(product))}>delete</Button></td>
        </tr>
        )
      })}
      </tbody>
    </Table>

    </Container>
  )
}

export default Cart;