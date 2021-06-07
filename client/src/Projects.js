import logo from './logo.svg';
import './App.css';
import React from "react"
import project1pic from "./images/project1pic.jpg"
import project2pic from "./images/sustlogo.png"
function Projects() {
  return (
    <>
    <section className="main-heading my-5">
        <div className="about-me text-center my-5">
            <h1>Projects</h1>
            <hr style={
                {
                    height:"1px",
                    background:"#000000",
                    opacity:".1"
                }
                } className="w-75 mx-auto "/>
        </div>
        <div className="container">
          <div className="row row-cols-3">
            <div className="col">
            <div class="card mb-3" style={{
                    maxWidth:"540px",
                  }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={project1pic} className="img-fluid"></img>
                      </div>
                        <div class="col-md-8">
                          <div class="card-body">
                          <h5 class="card-title">I'm Fit</h5>
                          <p class="card-text"> I'm fit an app to get all the fitness needs of a person in one place</p>
                          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col">
            <div class="card mb-3" style={{
                    maxWidth:"540px",
                  }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={project2pic} className="img-fluid"></img>
                      </div>
                        <div class="col-md-8">
                          <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col">
            <div class="card" style={{
                    maxWidth:"540px",
                  }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={project1pic} className="img-fluid"></img>
                      </div>
                        <div class="col-md-8">
                          <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </section>
    </>
  );
}

export default Projects;
