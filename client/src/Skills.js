import logo from './logo.svg';
import './App.css';
import React from "react"


function Skills() {
  return (
    <>
    <section className="main-heading my-5">
        <div className="about-me text-center my-5">
            <h1>Skills</h1>
            <hr style={
                {
                    height:"1px",
                    background:"#000000",
                    opacity:".1"
                }
                } className="w-75 mx-auto "/>
        </div>
        <div className="about-me-card">
          <div className="card">
        
            <div class="row row-cols-2 about-me-row">

            </div>
          </div>
        </div>
    </section>
    </>
  );
}

export default Skills;
