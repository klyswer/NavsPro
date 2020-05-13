import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
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
              <Image className="img_modal" src={props.rutaImg} thumbnail alt={props.alt} roundedCircle />
            </Col>
            <Col className="" xs={12} sm={8}>
              <p className="mt-5 mb-3 text-justify">{props.info}</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>Cerrar</Button>
          <Button variant="outline-info" onClick="">Cotizar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalProduct;
