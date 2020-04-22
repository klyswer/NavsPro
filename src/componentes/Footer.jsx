import React from "react";

function Footer() {
  return (
    <>
    <div className="mt-5"></div>
      <footer className="page-footer font-small bg-info unique-color-dark pt-4">
        <div className="container">
          <ul className="list-unstyled list-inline text-center py-2">
            <li className="list-inline-item">
              <h5 className="mb-1">Resgistrate gratis</h5>
            </li>
            <li className="list-inline-item">
              <a href="#!" className="btn btn-dark btn-rounded">
                Unirse
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://mdbootstrap.com/"> www.Mpryr.cl</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
