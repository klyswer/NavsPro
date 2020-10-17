import React from "react";
import { connect } from 'react-redux';
import {Nav, Col} from "react-bootstrap";
import './styles/navGalery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faAtom, faWind  } from '@fortawesome/free-solid-svg-icons'

// faBorderAll
// faCubes

const icon_todos = <FontAwesomeIcon icon={faList} />
const icon_materias = <FontAwesomeIcon icon={faAtom} />
const icon_esencias = <FontAwesomeIcon icon={faWind} />

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
             {icon_todos} Todas
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link className="link_style"  eventKey="Mp">
             {icon_materias} Materias
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link className="link_style" eventKey="Es" cat="Es">
             {icon_esencias} Esencias
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
