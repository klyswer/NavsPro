import React from "react";
import { connect } from 'react-redux';
import {Nav, Col} from "react-bootstrap";
import './styles/navGalery.css'


const NavGalery = ({filtrarProducts, mostrarProduc }) => {
  // const [select, setSelect] = useState(false);


  const handleSelect = (eventKey) => {
    switch (eventKey) {
      case "all":
        return mostrarProduc();
      default:
        return filtrarProducts(eventKey);
    }
  }

  return (
    <>
      <Col lg="12">
        <Nav
          justify
          variant="pills"
          className="bar_navs"
          defaultActiveKey="all"
          onSelect={handleSelect}
        >
          <Nav.Item>
            <Nav.Link className="link_style" eventKey="all" cat="all">
              Todas
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link className="link_style"  eventKey="Mp">
              Materias
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link className="link_style" eventKey="Es" cat="Es">
              Esencias
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </>
  );
}

const mapStateToProps = state => ({
  lista: state.listProduct
})

const mapDispatchToProps = dispatch => ({
  filtrarProducts(cat) {
    dispatch({
      type:'FILTRAR_LISTA',
      cat
    })
  },
  mostrarProduc(){
    dispatch({
      type:'MOSTRAR_TODO'
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavGalery);
