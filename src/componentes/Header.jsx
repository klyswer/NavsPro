import React, { Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";


class Header extends Component {
  
  render() {
    return (
      <>
        {/* <h1>Hello, {this.props.id}</h1>
      <button className="btn btn-primary">helloWorld</button> */}

        <Navbar fixed="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand href="/home">
          <img
            src="./images/web_01.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#Productos">Productos</Nav.Link>
              <Nav.Link href="#Direccion">Dirección</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href="#SendEmail">ventas@detergentesryr.cl</Nav.Link>
              <Nav.Link eventKey={2} href="#Login">
                Ingresar
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
