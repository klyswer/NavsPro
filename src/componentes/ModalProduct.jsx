import React, { useState } from "react";
import { Modal, Button, Col, Row, Image, Form } from "react-bootstrap";
import "./styles/modal.css";

function ModalProduct(props) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    address: "",
    phone: "",
    message: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    // console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data.username + " - " + data.email);
  };

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
          <Modal.Title
            className="title_modal"
            id="example-custom-modal-styling-title"
          >
            {props.title + " " + props.id}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
            <Col
              id=""
              className="d-flex justify-content-center align-items-center flex-wrap"
              xs={12}
              sm={4}
            >
              <div className="d-flex justify-content-center align-items-center flex-wrap">
                <Image
                  className="img_modal w-100"
                  src={`.${props.rutaImg}`}
                  thumbnail
                  alt={props.alt}
                />

                <div className="format_style mt-2">
                  En formato:
                  {props.formato.length > 1
                    ? ` [ ${props.formato[0]}, ${props.formato[1]}, ${props.formato[2]} ] ${props.medida}`
                    : ` ${props.formato}${props.medida}`}
                </div>
              </div>

              <div className="d-flex justify-content-center align-items-center mt-3">
                <div className="circle_item active_item"></div>
                <div className="precio_color">$ {props.precio} </div>
              </div>
            </Col>

            <Col
              id="text_modal"
              className="d-flex justify-content-center align-items-center flex-wrap m-auto"
              xs={11}
              sm={8}
            >
              <Row className="w-100">
                <p className="mt-5 mb-3 text-justify">{props.info}</p>
              </Row>
              <Row className="w-100">
                <Form className="w-100" onSubmit={handleSubmit}>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        name="username"
                        type="text"
                        placeholder="Introduzca su nombre y apellido"
                        title="Por favor, introduzca su nombre y apellido."
                        onChange={handleInputChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Correo </Form.Label>
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="Correo electrónico."
                        title="Por favor, introduzca su correo electrónico."
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridAddress1">
                      <Form.Label>Dirección</Form.Label>
                      <Form.Control
                        name="address"
                        type="text"
                        placeholder="¿Cuál es su dirección?"
                        title="Estimado ¿donde se encuentra ubicado?"
                        onChange={handleInputChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAddress2">
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control
                        name="phone"
                        type="text"
                        placeholder="Ejemplo: +56 9 7744 9343"
                        title="Indiquenos su número para ponernos en contacto."
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      name="message"
                      as="textarea"
                      rows="3"
                      placeholder="¿Puede indicarnos su consulta?"
                      title="Cotice directamente por este campo."
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group className="float-right" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Acepto terminos." />
                  </Form.Group>

                  {/* <h3>{data.username + ' - ' + data.email + ' - ' + data.address + ' - ' + data.phone}</h3>
                  <h2>{data.message}</h2> */}

                  {/* <Button variant="info" type="submit">
                    Consulta directa
                  </Button> */}
                  
                </Form>
              </Row>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          {/* <Button variant="outline-danger" onClick={handleClose}>
            Cerrar
          </Button> */}
          <Button className="button_send" size="lg" onClick="" type="submit">
            Consulta directa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalProduct;
