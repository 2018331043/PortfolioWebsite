import logo from './logo.svg';
import './App.css';
import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


function Navbar() {
  return (
    <>
    <section id="nav-bar">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                  <a className="navbar-brand email" href="#" ><u>mahnurrahman14@gmail.com</u></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <a  className="nav-link" aria-current="page" href="#">HOME</a>
                      </li>
                      <li className="nav-item">
                        <a  className="nav-link" href="#">PROJECTS</a>
                      </li>
                      <li className="nav-item">
                        <a  className="nav-link" href="#" >
                          SKILLS
                        </a>
                      </li>
                      <li className="nav-item">
                        <a  className="nav-link" href="#" >CONTACT ME</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

        </section>
    </>
  );
}

export default Navbar;
