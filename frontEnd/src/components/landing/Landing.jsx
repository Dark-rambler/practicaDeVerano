import React from "react";
import "../../styles/landing/Landing.css";
function Landing() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid ps-5 ms-5 d-flex">
          <a href="#" className="navbar-brand flex-grow-1">
            Nombre
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ps-5 ms-5" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  ps-5 ms-5">
              <li href="#" class="nav-item   ps-5 ms-5">
                 <a className="nav-link" href="">Hotels</a> 
              </li>
              <li href="#" class="nav-item ">
                <a className=" nav-link" href="">  Oferts</a>
              </li>
              <li href="#" class="nav-item">
              <a className=" nav-link" href="">  About us</a>
              </li>
              <li href="#" class="nav-item">
              <a className=" nav-link" href="">Log In </a>
              </li>
              <li href="#" class="nav-item ">
              <a className=" nav-link" href="">Sing In </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <h5 className="mt-4 mb-4 text-center ">
            Hotels
        </h5>
        <section>
        </section>

      </div>
    </div>
  );
}

export default Landing;
