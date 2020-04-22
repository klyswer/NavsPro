import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

// Objetos JSON
// import productList from './productList.json';

function ModalProduct(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   function findById(id){
  //     return productList.find((producto)=>{
  //         return producto.id === id;
  //     });
  //   }

  //   console.log(findById(props.id));
  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        Ver detalles
      </Button>

      <Modal
        size="xl"
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {props.title + " " + props.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="" xs={12} md={6}>
              <Image src={props.rutaImg} thumbnail alt={props.alt} />
            </Col>
            <Col className="" xs={12} md={6}>
              <p>{props.info}</p>
            </Col>
          </Row>

          {/* <Card.Img variant="null" src={props.rutaImg} /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>Cerrar</Button>
          <Button variant="outline-warning" onClick="">Agregar al pedido</Button>
        </Modal.Footer>
      </Modal>
    </>
          // <>
      //   <Navbar bg="dark" variant="dark">
      //     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      //     <Nav className="mr-auto">
      //       <Nav.Link href="#home">Home</Nav.Link>
      //       <Nav.Link href="#features">Features</Nav.Link>
      //       <Nav.Link href="#pricing">Pricing</Nav.Link>
      //     </Nav>
      //     <Form inline>
      //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      //       <Button variant="outline-info">Search</Button>
      //     </Form>
      //   </Navbar>
      //   <br />
      //   <Navbar bg="primary" variant="dark">
      //     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      //     <Nav className="mr-auto">
      //       <Nav.Link href="#home">Home</Nav.Link>
      //       <Nav.Link href="#features">Features</Nav.Link>
      //       <Nav.Link href="#pricing">Pricing</Nav.Link>
      //     </Nav>
      //     <Form inline>
      //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      //       <Button variant="outline-light">Search</Button>
      //     </Form>
      //   </Navbar>

      //   <br />
      //   <Navbar bg="light" variant="light">
      //     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      //     <Nav className="mr-auto">
      //       <Nav.Link href="#home">Home</Nav.Link>
      //       <Nav.Link href="#features">Features</Nav.Link>
      //       <Nav.Link href="#pricing">Pricing</Nav.Link>
      //     </Nav>
      //     <Form inline>
      //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      //       <Button variant="outline-primary">Search</Button>
      //     </Form>
      //   </Navbar>
      // </>
  );
}

export default ModalProduct;
