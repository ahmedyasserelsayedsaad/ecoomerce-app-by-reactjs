import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Register = () => {

   
       const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
return (
  <>
  <Button  onClick={handleShow} style={{marginLeft:'15px'}}>
  Register
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title style={{width:'100%',textAlign:'center',fontSize:'25px',fontWeight:'bold' ,color:'black'}}>Registertion</Modal.Title>
    </Modal.Header>
    
    <Modal.Body>
    <Button variant="primary" onClick={handleClose} style={{width:'100%'}}>
    Register with Google
      </Button>
    <Form>
    <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
      <Form.Label >Email address</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" style={{borderBottom:'2px solid blue',outline:'none'}} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>password</Form.Label>
      <Form.Control type="password" placeholder="password" style={{borderBottom:'2px solid blue',outline:'none'}} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>name</Form.Label>
      <Form.Control type="text" placeholder="password" style={{borderBottom:'2px solid blue',outline:'none'}} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>lastname</Form.Label>
      <Form.Control type="text" placeholder="password" style={{borderBottom:'2px solid blue',outline:'none'}} />
    </Form.Group>
    
    
  </Form>
    </Modal.Body>
    <Modal.Footer>
     
      <Button variant="primary" onClick={handleClose} style={{width:'100%'}}>
      Register
      </Button>
    </Modal.Footer>
  </Modal>
</>
    
  )
}

export default Register;