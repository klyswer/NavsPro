import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";


// Objetos JSON
import productList from "./productList.json";

// Componentes
import ModalProduct from "./ModalProduct.jsx";
import NavGalery from "./NavGalery.jsx";

function Galery(props) {
  return (
    <Container>
      <h1 id="Productos"className="mt-5 mb-5">{props.data}</h1>
      <NavGalery/>
      <div className="mt-3"></div>
      <Row>
        {//GENERAMOS LOS CARDS DE CADA PRODUCTO, MAPEANDO EL ARRAY DE DATOS (productList)
        productList.map((item,i) => (
          <Col key={i} className="mt-4" xs="6" md="4" lg="3">
            <Card cat={item.cat}>
              <Card.Body id={item.id}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Img variant="top" src={item.rutaImg} />
                <Card.Text className="caja_texto_cards mt-3">
                  {item.descript}
                </Card.Text>
                {/* <Button variant="outline-info">Comprar</Button> */}
                
                <ModalProduct //Boton de Ver detalle
                  id={item.id}
                  title={item.title}
                  rutaImg={item.rutaImg}
                  info={item.info}
                  alt={item.alt}
                />
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Precio = {item.precio}</small>
              </Card.Footer>
              <Button variant="outline-warning">Agregar</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Galery;
