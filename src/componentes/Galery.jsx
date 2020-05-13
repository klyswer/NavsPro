import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './styles/galery.css';

// Objetos JSON
import productList from "./productList.json";

// Componentes
import ModalProduct from "./ModalProduct.jsx";
import NavGalery from "./NavGalery.jsx";

function Galery(props) {
  return (
    <>
      <div id="Productos" className="mt-5 mb-5 Bg_titleGalery container-fluid">
        <div className="Bar_titleGalery ">
          <h1 className="mt-5 mb-5 titleGalery"> {props.titleGalery}</h1>
        </div>
      </div>
      <Container>
        <NavGalery />
        <div className="mt-3"></div>
        <Row>
          {
            productList.map((item, i) => (
              <Col key={i} className="mt-4" xs="12" sm="6" md="4" lg="3">
                <Card cat={item.cat}>
                  <Card.Body id={item.id}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + item.rutaImg} />
                    <Card.Text className="caja_texto_cards mt-3 mb-3">
                      {item.descript}
                    </Card.Text>

                    <ModalProduct //Boton de Ver detalle
                      id={item.id}
                      title={item.title}
                      rutaImg={item.rutaImg}
                      info={item.info}
                      alt={item.alt}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="circle_item active_item"></div>
                      <span className="precio_color">$ {item.precio} </span>
                    </div>
                  </Card.Footer>
                  {/* <Button variant="outline-warning">Cotizar</Button> */}
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  );
}

export default Galery;
