import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="text-center mt-5">
        <div className="container-fluid">
          <div className="row gap-4">
            <div className="col-12 pt-5">
              <h1>
                <a className="nav-link fs-5 fw-bold me-5 text-decoration-none text-black" href="#">
                  <span className="bg-danger px-1">M</span>uhammad
                </a>
              </h1>
            </div>
            <div className="col-md-12 gap-3 pb-5">
              <ul className="list-inline  links">
                <li className="list-inline-item">
                  <a className="text-decoration-none text-black px-2 fw-normal fs-5" href="#">Home</a>
                </li>
                <li className="list-inline-item">
                  <a className="text-decoration-none text-black px-2 fw-normal fs-5" href="#">About</a>
                </li>
                <li className="list-inline-item">
                  <a className="text-decoration-none text-black px-2 fw-normal fs-5" href="#">Services</a>
                </li>
                <li className="list-inline-item">
                  <a className="text-decoration-none text-black px-2 fw-normal fs-5" href="#">Projects</a>
                </li>
                <li className="list-inline-item">
                  <a className="text-decoration-none text-black px-2 fw-normal fs-5" href="#">Testimonial</a>
                </li>
                <li className="list-inline-item">
                  <a className="text-decoration-none text-black px-2 fw-normal fs-5" href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-12 py-3 bottom-bar">
              <p className="mb-0">
                © 2024 <span className="text-danger"> Muhammad</span> All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
