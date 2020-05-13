import React from "react";
import './styles/footer.css';

function Footer() {

  return (
    <>
      <footer id="Direccion" className="site-footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 mb-5 d-flex justify-content-center align-items-center flex-wrap">
              <h6 className="mb-3">¿Donde nos encontramos?</h6>

                <p className="">Ingresa en maps o wase: La Capilla 7630, Cerro Navia.</p>

                <iframe title="Donde encontrarnos Mp-R&R" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185.37884018547322!2d-70.74417124808969!3d-33.41504141081667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c16107b5d4bb%3A0xe2a2979fa55c79f2!2sLa%20Capilla%207630%2C%20Cerro%20Navia%2C%20Regi%C3%B3n%20Metropolitana!5e1!3m2!1ses!2scl!4v1589283003599!5m2!1ses!2scl" width="500" height="350" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0">
                </iframe>

            </div>

            <div className="col-sm-12 col-md-6">
              <h6 className="mb-3">Contacto</h6>
              <ul className="footer-links">
                <li><a href="/#">About Us</a></li>
                <li><a href="/#">Contact Us</a></li>
                <li><a href="/#">Contribute</a></li>
                <li><a href="/#">Privacy Policy</a></li>
                <li><a href="/#">Lorem</a></li>
              </ul>
            </div>

          </div>

        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-md-12 mb-3">
              <p className="copyright-text">Copyright &copy; 2020 Todos los derechos reservados
                <a href="/#"> Mp-R&R.com</a>.
              </p>
            </div>

            <div className="col-md-12">
              <ul className="social-icons">
                <li><a className="facebook" href="/#"><i className="fa fa-facebook"></i></a></li>
                <li><a className="twitter" href="/#"><i className="fa fa-twitter"></i></a></li>
                <li><a className="dribbble" href="/#"><i className="fa fa-dribbble"></i></a></li>
                <li><a className="linkedin" href="/#"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
