import React from "react";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";


const NavGalery = (props)=> {

  return (
    <>
      <Col lg="12">
        <Nav justify variant="pills" defaultActiveKey="Todos">
          <Nav.Item>
            <Nav.Link className="" id="All" href="#Todos" eventKey="btn-1" cat="all">
              Todas
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link className="" href="#MateriasPrimas" eventKey="btn-2" cat="mp">
              Materias primas
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link className="" href="#Bidones" eventKey="btn-3" cat="bid">
              Bidones
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link className="" href="#Esencias" eventKey="btn-4" cat="Es">
              Esencias
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </>
  );
}

export default NavGalery;
