import React, { useState } from "react";
import { Modal, Button, Col, Row, Image, Form } from "react-bootstrap";
// import ButtonSend from './common/ButtonSend'
import "./styles/modal.css";
import {
  esEmailValido,
  validarNumero,
} from "../utils/FormatUtil";

const ModalProduct = ({
  id,
  title,
  rutaImg,
  info,
  alt,
  precio,
  formato,
  medida,
  rutaFicha,
  fichaNombre,
}) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    address: "",
    phone: "",
    message: "",
    terminos: false,
  });
  const [error, setError] = useState({
    validateErrorEmail: '',
    validateErrorPhone: '',
    msgErrorEmail: "",
    msgErrorPhone: "",
    btn_disabled: true,
  });


  // useEffect(() => {
  //   const event = ()=>{
  //       if(error.validateErrorEmail === true || error.validateErrorPhone === true){
  //       console.log("existe un error btn deshabilitado")
  //       setError({
  //         btn_disabled: true
  //       });
  //     }
  //     console.log('Habilita el btn')
  //     setError({
  //       btn_disabled: false
  //     });
  //   }
   
  //   return () => clearImmediate(event)
    
  // }, [error.validateErrorEmail,error.validateErrorPhone]);


  // const habilitaBtn = ()=>{
  //   if(error.validateErrorEmail === true || error.validateErrorPhone === true){
  //     console.log("existe un error btn deshabilitado")
  //     setError({
  //       btn_disabled: true
  //     });
  //   }  
  //   setError({
  //     btn_disabled: false
  //   });
  // }


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handleInputChange = ({ name, value, checked, type }) => {
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
   
    if (name === "email") {
      if (value === "" || !esEmailValido(value)) {
        setError({
          ...error,
          validateErrorEmail: true,
          msgErrorEmail: "Debe introducir un email valido para comunicarnos con usted.",
          btn_disabled: true,
        });
      } else {
        console.log("estoy seteando esto mal")
        setError({
          ...error,
          validateErrorEmail: false,
          msgErrorEmail: "",
          btn_disabled: false,
        });
      }
    } else if (name === "phone") {
      if (value === "" || !validarNumero(value) || value.length < 9) {
        setError({
          ...error,
          validateErrorPhone: true,
          msgErrorPhone: "Recuerde introducir un número de teléfono valido, mínimo 9 digitos.",
          btn_disabled: true,
        });
      } else {
        setError({
          ...error,
          validateErrorPhone: false,
          msgErrorPhone: "",
          btn_disabled: false,
        });
      }
    }
    console.log(`Correo: ${error.validateErrorEmail}`)
    console.log(`Phone: ${error.validateErrorPhone}`)
  };




  const handleSubmit = (event) => {
    event.preventDefault();
    

    if( error.validateErrorEmail !== '' && error.validateErrorEmail === false && error.validateErrorPhone !== '' && error.validateErrorPhone === false) {
      const url = "https://mpryrback.herokuapp.com/api/mails";
      const headersRequest = {
        "Content-Type": "application/json",
      };
      const datos = JSON.stringify({
        product: "5f217a1fd30f9d0f21024ec9",
        username: data.username,
        email: data.email,
        address: data.address,
        phone: data.phone,
        message: data.message,
      });
      const miInit = {
        method: "post",
        headers: headersRequest,
        body: datos,
      };
      fetch(url, miInit)
        .then((response) => {
          return response.json();
        })
        .then(() => {
          alert("Gracias por escribirnos, le responderemos a la brevedad posible.");
      handleClose();
        })
        .catch(() => {
          console.log("Por favor, intente más tarde.");
        });
      
    }else{
      if(error.validateErrorPhone === ''){
        alert("Por favor, introduzca un número telefónico valido.")
      }else{
        alert("Por favor, introduzca un Correo Electrónico valido.")
      }
    }
  };

  return (
    <>
      <div className="botones_info">
        <Button className="btn_contactar" onClick={handleShow}>
          Consultar
        </Button>
        {rutaFicha !== "undefined" && !!rutaFicha ? (
          <div className="pdf_ficha">
            <img
              src={process.env.PUBLIC_URL + "./images/iconoPDF.png"}
              alt="icon-pdf"
              width="25px"
            />
            <a href={rutaFicha} download={fichaNombre}>
              {"Ficha"}
            </a>
          </div>
        ) : (
          <div className="pdf_ficha widt90">
            <img
              src={process.env.PUBLIC_URL + "./images/iconoPDF.png"}
              alt="icon-pdf"
              width="25px"
            />
            <div>{"Sin Ficha"}</div>
          </div>
        )}
      </div>

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
            {title + " " + id}
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
                  src={`${rutaImg}`}
                  thumbnail
                  alt={alt}
                />

                <div className="format_style mt-2">
                  En formato:
                  {formato.length > 1
                    ? ` [ ${formato[0]}, ${formato[1]}, ${formato[2]} ] ${medida}`
                    : ` ${formato}${medida}`}
                </div>
              </div>

              <div className="d-flex justify-content-center align-items-center mt-3">
                <div className="circle_item active_item"></div>
                <div className="precio_color">$ {precio} </div>
              </div>
            </Col>

            <Col
              id="text_modal"
              className="d-flex justify-content-center align-items-center flex-wrap m-auto"
              xs={11}
              sm={8}
            >
              <Row className="w-100 productFlex">
                <div className="mt-2 productName">Producto: <span>{title}</span></div>
                <p className="mt-2 mb-3 text-justify productDescription">Descripción: <span>{info}</span></p>
              </Row>
              <Row className="w-100">
                <Form className="w-100">
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        name="username"
                        type="text"
                        placeholder="Introduzca su nombre y apellido"
                        title="Por favor, introduzca su nombre y apellido."
                        onChange={(event) => handleInputChange(event.target)}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Correo</Form.Label>
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="Correo electrónico."
                        title="Por favor, introduzca su correo electrónico."
                        onChange={(event) => handleInputChange(event.target)}
                      />
                      {error.validateErrorEmail && (
                        <div className="errorFormInput">
                          {error.msgErrorEmail}
                        </div>
                      )}
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
                        onChange={(event) => handleInputChange(event.target)}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAddress2">
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control
                        name="phone"
                        type="text"
                        maxLength="12"
                        placeholder="+56977449343"
                        title="Indiquenos su número para ponernos en contacto."
                        onChange={(event) => handleInputChange(event.target)}
                      />
                      {error.validateErrorPhone && (
                        <div className="errorFormInput">
                          {error.msgErrorPhone}
                        </div>
                      )}
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      name="message"
                      as="textarea"
                      className="campo_comentario"
                      rows="3"
                      placeholder="Este mensaje llegara directo a nuestros vendedores quienes lo contactaran a la brevedad posible. Gracias por preferir Mpr&r."
                      title="Cotice directamente por este campo."
                      onChange={(event) => handleInputChange(event.target)}
                      resize="none"
                    />
                  </Form.Group>

                  <Form.Group className="float-right" id="formGridCheckbox">
                    <Form.Check
                      type="checkbox"
                      checked={data.terminos}
                      name="terminos"
                      label="Acepto terminos."
                      onChange={(event) => handleInputChange(event.target)}
                    />
                  </Form.Group>
                </Form>
              </Row>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button
            className="button_send"
            size="lg"
            type="submit"
            onClick={handleSubmit}
            disabled={error.btn_disabled && !data.terminos}
          >
            Consulta directa
          </Button>
          {/* <ButtonSend /> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalProduct;
