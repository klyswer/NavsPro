import React, { Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faStore, faRoute, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
// import {faEdge} from '@fortawesome/free-brands-svg-icons'

const logo = `${process.env.PUBLIC_URL}/images/LOGO_RYR.png`

const icon_producto = <FontAwesomeIcon icon={faStore} />
const icon_direccion = <FontAwesomeIcon icon={faRoute} />
const icon_mail = <FontAwesomeIcon icon={faEnvelope} />
const icon_phone = <FontAwesomeIcon icon={faMobileAlt} />

class Header extends Component {
  
  render() {
    return (
      <>
        <Navbar className="bg_pr"  fixed="top" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="/">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="btn_header" href="#Productos"> {icon_producto} Productos</Nav.Link>
              <Nav.Link className="btn_header" href="#Direccion">{icon_direccion} Dirección</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link className="btn_header">{icon_mail} mp@distribuidoraryr.cl </Nav.Link>
              <Nav.Link className="btn_header" eventKey={2}>{icon_phone} +56 9 9999 9720</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
