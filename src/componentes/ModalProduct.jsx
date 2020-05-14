import React, { useState } from "react";
import { Modal, Button, Col, Row, Image, Form } from "react-bootstrap";
import './styles/modal.css';


function ModalProduct(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <Modal.Header closeButton className="header_bg">
          <Modal.Title className="title_modal" id="example-custom-modal-styling-title">
            {props.title + " " + props.id}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
            <Col className="d-flex justify-content-center align-items-center" xs={12} sm={4}>
              <Image className="img_modal" src={`.${props.rutaImg}`} thumbnail alt={props.alt} roundedCircle />
            </Col>
            <Col className="" xs={12} sm={8}>
              <Row className="w-100">
                <p className="mt-5 mb-3 text-justify">{props.info}</p>
              </Row>
              <Row className="w-100">
                <Form className="w-100">
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control type="text" placeholder="Introduzca su nombre y apellido" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Correo electrónico</Form.Label>
                      <Form.Control type="email" placeholder="Introduzca su Email" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridAddress1">
                      <Form.Label>Dirección</Form.Label>
                      <Form.Control type="text" placeholder="¿Cual es su dirección?" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAddress2">
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control type="text" placeholder="Número de contacto" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="¿Puede indicarnos su consulta?"/>
                  </Form.Group>
                  {/* <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control as="select" value="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row> */}

                  <Form.Group className="float-right" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="No soy un robot" />
                  </Form.Group>

                  {/* <Button variant="primary" type="submit">
                    Submit
                  </Button> */}
                </Form>
              </Row>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>Cerrar</Button>
          <Button variant="outline-info" onClick="" type="submit">Cotizar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalProduct;
